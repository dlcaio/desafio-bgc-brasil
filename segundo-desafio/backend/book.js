'use strict';

const dynamodb = require('./dynamodb');

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
                minionId: minion.minionId

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
