'use strict';

const dynamodb = require('./dynamodb');
const ses = require('./ses');

module.exports.book = async event => {

  const data = JSON.parse(event.body)

  // get minions array and user information
  const minionsArr = data['Minions']
  const userId = data['UserId']
  const userEmail = data['UserEmail']

  const minionsParams = []

  // add info related to each minion to execute put request
  minionsArr.forEach(minion => {
    minionsParams.push({
        PutRequest: {
            Item: {
                booked: true,
                minionId: minion.minionId,
                UserId: userId,
                UserEmail: userEmail,
                name: minion.name,
                description: minion.description
            }
        }
    })
  })

  // add minions info with respect to minions table
  const params = {
    RequestItems: {
        [process.env.MINIONS_TABLE]: minionsParams
    }
  };


  // email content
  var minionsDiv = ''
  minionsArr.map(minion => {
    minionsDiv +=
    '<h2>Nome: ' + minion.name
    + '</h2>' + '<h3>Descrição: ' + minion.description + '</h3>'
  })

  var emailLayout = (
    `<!DOCTYPE html><html><head></head><body><h1>Obrigado pela reserva!</h1><h4>Você reservou o(s) minion(s):</h4> ${minionsDiv} <h4>Aproveite seus minions : )</h4></body></html>`)

  const emailParams = {
        Destination: {
            ToAddresses: [userEmail, "thiago@bgcbrasil.com.br"]
        },
        Message: {
            Body: {
                Html: { Data: emailLayout }
            },
            
            Subject: { Data: "Sua reserva na Minions Store" }
        },
        Source: "caiodellalibera@id.uff.br"
    };

    try {
        const respData = await dynamodb.batchWrite(params).promise()

        try {
          const emailResp = await ses.sendEmail(emailParams).promise()    
        } catch (err) {
          console.log(err)
        }

        const code = 200
        const body = JSON.stringify(params)
        return {
          statusCode: code,
          body: body,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          }
        }
        
    } catch (err) {
        console.log(err)
        const code = 501
        const body = {error: err}
        return {
          statusCode: code,
          body: body,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
          }
        }
    }
}
