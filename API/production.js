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





module.exports = {
    x: async (next)=>{
            var New1 = await News.findAll({
                where: {
                            id: 'p-1486906489996'
                }
            });
            var y = JSON.stringify(New1);
            return y;
        },
    c:async () => {
        var now = Date.now();
        var test = await News.create({
                id: 'p-'+now,
                title: '次元壁',
                content: '第一次测试',
                image: 'img/demo.jpg',
                createdAt: now,
                updatedAt: now,
                version: 0
            });
        console.log('created: ' + JSON.stringify(test));
        return "success";
    },
}
