const router = require('express').Router();
const { getAccount } = require('../controllers/account.controller');

router.route('/me').get(getAccount);

module.exports = router;
