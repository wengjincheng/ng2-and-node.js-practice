
const APIError = require('../rest').APIError;

const production  = require('../production');

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            code: production.getNews()
        });
    },
};



