const { Op } = require('sequelize/dist');
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
