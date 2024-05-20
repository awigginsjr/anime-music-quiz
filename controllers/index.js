const router = require('express').Router();

const apiRoutes = require('../routes/api');
const homeRoutes = require('../routes/homeRoutes');
const quizRoutes = require('./quizController')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;
