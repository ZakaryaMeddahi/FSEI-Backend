const router = require('express').Router();
const { createAdmin } = require('../controllers/admins.controller');

router.route('/').post(createAdmin);

module.exports = router;
