const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

 router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "hike" WHERE "completed" = 'false';`;
        pool.query(query).then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.sendStatus(500);
        });
    } else {
            res.sendStatus(403);
        }
    }
);

router.get('/completed', (req, res) => {
    // if (req.isAuthenticated()) {
    //     const query = `SELECT * FROM "hike" WHERE "completed" = 'true';`;
    // }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;