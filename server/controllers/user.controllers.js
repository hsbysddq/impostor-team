const { Op } = require('sequelize');
const { User } = require('../database/models');

// GET ALL USER
exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    return res.status(200).json({
      message: 'success get all user',
      code: 200,
      user,
    });
  } catch (error) {
    next(error);
  }
};

//get user profile
exports.findOne = (req, res) => {
  const userId = req.user.id;
  User.findOne({
    attributes: ['id', 'name', 'email', 'username', 'avatar', 'bio'],
    where: {
      id: userId,
    },
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({
          result: 'failed',
          message: 'user not registered',
        });
      }
      res.status(200).json({
        result: 'success',
        message: 'successfully retrieve data',
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        result: 'failed',
        message: 'some error occured while retrieving game',
        error: err.message,
      });
    });
};

// SEARCH USER
exports.searchUser = async (req, res, next) => {
  try {
    const { search } = req.query;
    const user = await User.findAll({
      where: { username: { [Op.like]: `%${search}%` } },
    });

    if (!user) {
      throw new Error('user not found');
    }

    return res.status(200).json({
      message: 'success search user',
      code: 200,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE USER PROFILE
exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { username } = req.body;
    if (!userId) {
      throw new Error('unauthorized');
    }

    const user = await User.update({ username }, { where: { id: userId } });
    if (!user) {
      throw new Error('user not found');
    }

    return res.status(201).json({
      message: 'successfully update user',
      code: 201,
      user,
    });
  } catch (error) {
    next(error);
  }
};
