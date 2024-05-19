const router = require('express').Router();

const apiRoutes = require('../routes/api');
const homeRoutes = require('../routes/route');

router.use('/', route);
router.use('/api', apiRoutes);

module.exports = router;