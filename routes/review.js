const express = require('express');
const router = express.Router();
const { addReview } = require('../controllers/review');

router.get('/reviews', function(req, res) {
    res.status(200).send('Get Review');
})
router.post('/reviews', addReview);

module.exports = router;
