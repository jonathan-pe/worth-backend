require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const logger = require('winston');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const config = require('./config/environment.js');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PATCH, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept, Authorization');
    next();
});

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function (req, res) {
    res.send('Pocket BE!')
});

app.use('/', require('./routes/review'));


app.use(function (req, res) {
    logger.info(`Client sent a request to ${req.originalUrl}, which does not exist`);
    res.status(404).send({ success: false, message: 'Route not found!' });
});

process.on('uncaughtException', err => {
    logger.error(`Global error (uncaught exception) ${err}`);
    logger.error('Stack trace', err.stack);
    process.exit(1);
});

app.listen(config.wb_port);
logger.info(`Server is running on port ${config.wb_port}`);
