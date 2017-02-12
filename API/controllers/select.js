
const APIError = require('../rest').APIError;

const production  = require('../production');

module.exports = {
    'GET /api/products': async (ctx, next) => {
        var x = [];
        await production.x().then((v)=> { 
            x = v;
        });
        ctx.rest({
            code: x
        });
    },
};



