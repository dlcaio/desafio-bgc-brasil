'use strict';

const dynamodb = require('./dynamodb');

module.exports.queryMinion = async event => {
  const params = {
    TableName: process.env.MINIONS_TABLE,
    KeyConditionExpression: 'booked = :bkd',
    ExpressionAttributeValues: {
      ':bkd': 'false',
      
    }
  }
  console.log(params)

  try{
    const data = await dynamodb.query(params).promise()
    console.log(JSON.stringify(data.Items))
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
