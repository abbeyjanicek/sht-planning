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
router.post('/add-hike', (req, res) => {
    console.log(req.body);
    if (req.isAuthenticated()) {
        const query = `INSERT INTO "hike" ("date_start", "date_end", "mile_start", "mile_end", "completed", "trailhead_start_id", "trailhead_end_id", "comments") VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
        pool.query(query, [req.body.hikeToAdd.date_start, req.body.hikeToAdd.date_end, req.body.hikeToAdd.mile_start, req.body.hikeToAdd.mile_end, req.body.hikeToAdd.completed, req.body.hikeToAdd.trailhead_start_id, req.body.hikeToAdd.trailhead_end_id, req.body.hikeToAdd.comments])
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