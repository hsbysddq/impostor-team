const router = require('express').Router();

const {
  getAllUser,
  updateUser,
  searchUser,
  findOne,
  findOneById,
} = require('../controllers/user.controllers');
const { isAuthentication } = require('../middlewares/auth.middlewares');

router.get('/user', isAuthentication, searchUser);
router.get('/users', getAllUser);
// router.put('/users/:id', isAuthentication, updateUser);
router.put('/users/:id', updateUser);
// router.get('/user/:username', isAuthentication, findOne);
router.get('/user/:username', findOne);
router.get('/users/:id', findOneById);

module.exports = router;
