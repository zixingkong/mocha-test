import undici from 'undici';


const client = new undici.Client('http://www.baidu.com')

// async function httpRequestAsync(method = 'post', path, headers, reqBody, isJson = true) {
async function httpRequestAsync(method = 'get', path='/',) {
  const { statusCode, body } = await client.request({
    path,
    method: method
  });
  const data = statusCode === 200 ? await body.json() : await body.text();
  return { status: statusCode, data };

}


export default { httpRequestAsync }