const router = require('express').Router();

const {
  getAllUser,
  updateUser,
  searchUser,
} = require('../controllers/user.controllers');
const { isAuthentication } = require('../middlewares/auth.middlewares');

router.get('/user', isAuthentication, searchUser);
router.get('/users', isAuthentication, getAllUser);
router.put('/users', isAuthentication, updateUser);

module.exports = router;
