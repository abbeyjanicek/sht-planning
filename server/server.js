
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const hikesRouter = require('./routes/hikes.router');
const campsiteRouter = require('./routes/campsite.router');
const reviewRouter = require('./routes/review.router.js');
const trailheadRouter = require('./routes/trailhead.router.js');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/hike', hikesRouter);
app.use('/api/campsite', campsiteRouter);
app.use('/api/review-add', reviewRouter);
app.use('/api/trailhead', trailheadRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
