const router = require('express').Router();

const apiRoutes = require('../routes/api');
const quizRoutes = require('./quizController')
const homeRoutes = require('../routes/route');

router.use('/', route);
router.use('/api', apiRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;