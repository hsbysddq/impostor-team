const router = require('express').Router();

const { getAllUser, updateUser } = require('../controllers/user.controllers');
const { isAuthentication } = require('../middlewares/auth.middlewares');

router.get('/users', isAuthentication, getAllUser);
router.put('/users', isAuthentication, updateUser);

module.exports = router;
