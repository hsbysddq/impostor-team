const bcrypt = require('bcrypt');

const { User } = require('../database/models');

//LOGIN
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('invalid email');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('invalid password');
    }

    return res.status(201).json({
      message: 'successfully login user',
      code: 201,
      user,
    });
  } catch (error) {
    next(error);
  }
};
