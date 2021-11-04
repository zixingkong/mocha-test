'use strict';

import {httpRequestAsync } from '../utils/requestHttp.js'
import { strict as assert } from 'assert';

describe('test', function () {

    it('机构管理员登录', async function () {
        let headers = {'Content-Type': 'application/json'}
        let reqBody = {
            "grant_type": "password",
            "username": "superAdmin_38140798",
            "password": "123321",
            "client_id": "web_app",
            "client_secret": "changeit"
        };
        let res = await httpRequestAsync({method: 'POST',headers:headers,
            path:'/api/v1/auth/login',reqBody:reqBody});
        console.log(res);
        assert.deepEqual(res.status,422);
    });
});