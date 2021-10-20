import undici from 'undici';


const client = new undici.Client('http://iam-identity-service.iot-dev.rootcloudapp.com')

// async function httpRequestAsync(method = 'post', path, headers, reqBody, isJson = true) {
async function httpRequestAsync(method = 'post', path='/api/v1/auth/login',headers, reqBody, isJson) {
  const { statusCode, body } = await client.request({
    path,
    method: method,
    headers: headers,
    reqBody: reqBody,
  });
  const data = await body.json();
  return { status: statusCode, data };
}


export {httpRequestAsync}