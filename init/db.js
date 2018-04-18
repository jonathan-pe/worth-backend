'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const logger = require('winston');
const config = require('../config/environment');

logger.info('Connecting to db...');
const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
    host: config.db_host,
    dialect: 'mysql',
    // TODO: Investigate optimal pool settings
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    operatorsAliases: false
});

sequelize
    .authenticate()
    .then(function () {
        logger.info('Connection to the database has been established successfully.');
        sequelize.sync();
    }, function (err) {
        logger.error('Unable to connect to the database. Possibly a failed deployment.!', err);
        logger.error('Shutting down application with non zero error code...');
        process.exit(2);
    });

const db = {};

db.Review = sequelize.import(path.join(__dirname, '..', 'models', 'review'));
db.sequelize = sequelize;

module.exports = db;
