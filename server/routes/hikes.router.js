const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const rejectUnauthenticated = require('../modules/authentication-middleware.js');

/**
 * GET route template
 */

router.get('/upcoming', (req, res) => {
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
// rejectUnauthenticated,

router.get('/completed', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "hike" WHERE "completed" = 'true';`;
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const query = `INSERT INTO "hike" ("date_start", "date_end", "mile_start", "mile_end", "completed", "trailhead_start_id", "trailhead_end_id", "comments", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
        pool.query(query, [req.body.date_start, req.body.date_end, req.body.mile_start, req.body.mile_end, req.body.completed, req.body.trailhead_start_id, req.body.trailhead_end_id, req.body.comments, req.user.id])
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