import fetch from 'node-fetch';
import { APIGatewayEvent, Context } from 'aws-lambda';

const API_ENDPOINT = 'https://icanhazdadjoke.com/';

const handler = async (event: APIGatewayEvent, context: Context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => ({
        statusCode: 200,
        body: data.joke,
      }))
      .catch((error) => ({ statusCode: 422, body: String(error) }));
};

export { handler };
