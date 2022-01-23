const router = require('express').Router();

const {
  getAllUser,
  updateUser,
  searchUser,
  findOne,
  myProfile,
} = require('../controllers/user.controllers');
const { isAuthentication } = require('../middlewares/auth.middlewares');

router.get('/user', isAuthentication, searchUser);
router.get('/users', isAuthentication, getAllUser);
router.put('/users', isAuthentication, updateUser);
router.get('/user/:username', isAuthentication, findOne);
router.get('/myProfile', isAuthentication, myProfile);

module.exports = router;
