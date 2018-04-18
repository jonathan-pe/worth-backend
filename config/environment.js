const os = require('os');

module.exports = {
    wb_port: process.env.WB_PORT || 3002,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_name: process.env.DB_NAME,
    db_password: process.env.DB_PASSWORD,
    host: process.env.HOST || os.hostname()
};
