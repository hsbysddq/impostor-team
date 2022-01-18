const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { User } = require('../database/models');


//Register
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPRISES_IN,
  });
};

createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
// authorizeentication
exports.register= async (req, res) => {
  try {
    //cek jika ada
    const user = await Model.UserGame.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      return res.status(401).json("User already exist!");
    }

    const newUser = await Model.UserGame.create({
      id: req.body.id,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

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