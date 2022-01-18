const router = require('express').Router();

const { login } = require('../controllers/auth.controllers');

router.post('/login', login);
router.post('/register',register);

module.exports = router;
