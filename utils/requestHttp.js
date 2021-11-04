import undici from 'undici';


const client = new undici.Client('http://iam-identity-service.iot-qa.rootcloudapp.com');

// async function httpRequestAsync(method = 'post', path, headers, reqBody, isJson = true) {
async function httpRequestAsync({method = 'get', path, headers, reqBody, isJson = true} = {}) {
    const {statusCode, body} = await client.request({
        path: path,
        method: method,
        headers: headers,
        reqBody: reqBody,
    });
    const data = await body.json();
    return {status: statusCode, data};
}


export {httpRequestAsync};