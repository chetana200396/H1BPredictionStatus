const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
    let reqBody = req.body;
    let title = 'Welcome to VISA Approval Prediction';

    res.status(200);
    res.render('layouts/dashboard', {title : title });
    } catch (e) {
        res.status(404);
        res.render('layouts/dashboard', { errors : e.message , hasErrors : true});
    }
});

module.exports = router;