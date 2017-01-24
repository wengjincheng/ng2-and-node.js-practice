const Sequelize = require('sequelize');

const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000                                                                                                                 
    }
});

var News = sequelize.define('news', {
    id: {
        type: Sequelize.STRING(50), 
        primaryKey: true
    },
    title: Sequelize.STRING(100),
    content: Sequelize.STRING(1000),
    image: Sequelize.STRING(100),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
    });

var now = Date.now();

// (async () => {
//     var test = await News.create({
//         id: 'p-'+now,
//         title: '次元壁',
//         content: '第一次测试',
//         image: 'img/demo.jpg',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(test));
// })();


var x =  (async ()=>{
            var New1 = await News.findAll({
                where: {
                    id: 'p-1485244092871'
                }
            });
            var y = JSON.stringify(New1);
            console.log(y);
            return y;
})();
console.log(x);
module.exports = {
     getProducts: () => {
        return x;
    },
};
