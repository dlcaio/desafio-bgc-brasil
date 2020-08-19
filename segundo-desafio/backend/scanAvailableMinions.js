'use strict';

const dynamodb = require('./dynamodb');

module.exports.scanAvailableMinions = async event => {
  const params = {
    TableName: process.env.MINIONS_TABLE,
    FilterExpression: 'booked = :bkd',
    ExpressionAttributeValues: {
      ':bkd': 'false',
    }
  }
  console.log(params)

  try{
    const data = await dynamodb.scan(params).promise()

    const code = 200
    const body = JSON.stringify(data.Items)
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
