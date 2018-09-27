const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const query = `INSERT INTO "campsite_review" ("campsite_id", "review", "rating", "user_id") VALUES ($1, $2, $3, $4);`;
        pool.query(query, [req.body.campsite_id, req.body.review, req.body.rating, req.user.id])
            .then((results) => {
                res.sendStatus(201);
            }).catch((error) => {
                console.log('POST to db failed', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }

});

module.exports = router;