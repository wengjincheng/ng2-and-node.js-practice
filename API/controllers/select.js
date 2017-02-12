
const APIError = require('../rest').APIError;

const production  = require('../production');

module.exports = {
    'GET /api/products/:id': async (ctx, next) => {
        var x = [];
        var id = ctx.params.id;
        await production.x(id).then((v)=> { 
            x = v;
        });
        ctx.rest({
            code: x
        });
    },
};



