
const APIError = require('../rest').APIError;

const production  = require('../production');

module.exports = {
    'GET /api/create': async (ctx, next) => {
        var c = [];
        await production.c().then((v)=> { 
            c = v;
        });
        ctx.rest({
            code: c
        });
    },
};



