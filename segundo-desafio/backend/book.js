'use strict';

const dynamodb = require('./dynamodb');

const ses = require('./ses');

module.exports.book = async event => {
  



  const data = JSON.parse(event.body)

  const dataList = data['Minions']

  const minions = []
  console.log(dataList)
  dataList.forEach(minion => {
    console.log(minion)
    minions.push({
        PutRequest: {
            Item: {
                booked: true,
                minionId: minion.minionId,
                UserId: data['UserId'],
                UserEmail: data['UserEmail']

            }
        }
    })
  })



  console.log(minions)

  const params = {
    RequestItems: {
        [process.env.MINIONS_TABLE]: minions
    }
  };


  var minionsDiv = ''
  minions.map(minion => {
    minionsDiv += '<h4>' + minion.PutRequest.Item.minionId + '</h4>'
  })

  var emailLayout = (
    `<!DOCTYPE html><html><head></head><body><h1>Obrigado pela reserva!</h1><h3>Você reservou o(s) minion(s):</h3> ${minionsDiv} <h3>Aproveite seus minions : )</h3></body></html>`)

  var emailParams = {
        Destination: {
            ToAddresses: [data['UserEmail'], "caiodellalibera@id.uff.br"]
        },
        Message: {
            Body: {
                Html: { Data: emailLayout
                  
                }
                
            },
            
            Subject: { Data: "Sua reserva na Minions Store"
                
            }
        },
        Source: "caiodellalibera@id.uff.br"
    };

    










  

  /*

    try {
        const respData = await dynamodb.batchWrite(params).promise()
        const code = 200
        const body = JSON.stringify(params.Item)
        return {
            statusCode: code,
            body: '',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            }
          }
    } catch (err) {
        const code = 501
        const body = {error: err}
        return {
            statusCode: code,
            body: body,
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          }
    }
  */

  //minions.forEach(minion => {
    try {
        const respData = await dynamodb.batchWrite(params).promise()
        try {
          
          const emailResp = await ses.sendEmail(emailParams).promise()
          console.log(emailResp)
    
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
 // })
    

}
