const router = require('express').Router();


router.use('/api', require('./users.js'));
router.use('/api', require('./peopleRoutes.js'));
router.use('/api', require('./companyRoutes.js'));
router.use('/api', require('./roundsRoute.js'));

module.exports = router 