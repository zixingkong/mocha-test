'use strict';

import {httpRequestAsync } from '../utils/requestHttp.js'


describe('test', function () {

    it('机构管理员登录', async function () {
        let res = await httpRequestAsync()
        console.log(res)
    });
});