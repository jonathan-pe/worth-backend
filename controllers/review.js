const logger = require('winston');
const { Review } = require('../init/db');
logger.level = 'info';

async function addReview(req, res) {
    const {name, category, price, description, worth} = req.body.review;
    const params = {name, category, price, worth};
    const hasParams = Object.keys(params).reduce((all, param) => all && params[param], true);

    if (!hasParams) {
        return res.status(400).send({ success: false, message: 'Missing param in request' });
    }

    try {
        const review = await Review.create({
            name,
            category,
            price,
            description,
            worth
        });
        logger.info(`Successfully saved review ${name} in the database.`);
        res.status(200).send({review});
    } catch (e) {
        res.status(500).send({ success: false, message: 'Could not save review in the database!', error: e});
    }
}

module.exports = { addReview };
