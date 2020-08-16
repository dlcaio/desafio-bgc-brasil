'use strict';

const dynamodb = require('./dynamodb');

module.exports.postMinion = async event => {
  
  const data = JSON.parse(event.body)
  
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Item: {
      minionId: data.minionId,
      name: data.name,
      description: data.description,
      booked: data.booked,
    }
  };


    try {
        const respData = await dynamodb.put(params).promise()
        const code = 200
        const body = JSON.stringify(params.Item)
        return {
            statusCode: code,
            body: body,
            headers: {
              'Access-Control-Allow-Origin': '*'
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

}
