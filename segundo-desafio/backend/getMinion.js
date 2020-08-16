'use strict';

const dynamodb = require('./dynamodb');

module.exports.getMinion = async event => {
  console.log(process.env.MINIONS_TABLE)
  const params = {
    TableName: process.env.MINIONS_TABLE,
    Key: {
      minionId: event.pathParameters.minionId,
      booked: 'false'

    }
  }
  console.log(params)

  try{
    const data = await dynamodb.get(params).promise()
    console.log(JSON.stringify(data.Item))
    const code = 200
    const body = JSON.stringify(data.Item)
    return {
      statusCode: code,
      body: body,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }

  } catch (err) {
    const code = 501
    const body = {error: err}
    return {
      statusCode: code,
      body: body,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
  }

}
