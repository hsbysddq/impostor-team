const router = require('express').Router();

const {
  getAllUser,
  updateUser,
  searchUser,
  findOne,
} = require('../controllers/user.controllers');
const { isAuthentication } = require('../middlewares/auth.middlewares');

router.get('/user', isAuthentication, searchUser);
router.get('/users', isAuthentication, getAllUser);
router.put('/users', isAuthentication, updateUser);
router.get('/myProfile', isAuthentication, findOne);

module.exports = router;
