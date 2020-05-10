import axios from 'axios';
import { APIGatewayEvent, Context } from 'aws-lambda';

const API_ENDPOINT = 'https://api.chucknorris.io/jokes/random';

interface API_RESPONSE {
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

const handler = async (event: APIGatewayEvent, context: Context) => {
  try {
    const response = await axios.get<API_RESPONSE>(API_ENDPOINT);
    const data = response.data;
    return { statusCode: 200, body: data.value };
  } catch (e) {
    return { statusCode: 422, body: String(e) };
  }
};

export { handler };
