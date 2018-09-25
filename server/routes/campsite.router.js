const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "campsite";`;
        pool.query(query).then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
if (req.isAuthenticated()) {
    const query = `INSERT INTO "hike_campsite" ("date", "campsite_id") VALUES ($1, $2);`;
    pool.query(query, [req.body.campsiteToAdd.date, req.body.campsiteToAdd.campsite_id])
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