import OpenAPIClientAxios from 'openapi-client-axios';

const api = new OpenAPIClientAxios({ definition: 'https://listen-api.listennotes.com/api/v2/openapi.json' });

export default async function getListenNotesAPI() {
  api.init();  
  const client = await api.getClient();
  return client;
}
