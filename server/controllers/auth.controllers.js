const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { kirimEmail } = require('../helpers');

//Register
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: parseInt(process.env.JWT_EXPRISES_IN),
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + parseInt(process.env.JWT_EXPRISES_IN) * 24 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      data: user,
    },
  });
};
// authorizeentication
exports.register = async (req, res) => {
  try {
    //cek jika ada
    const isExists = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (isExists) {
      return res.status(401).json('User already exist!');
    }

    const hash = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });

    createSendToken(user, 201, res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
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

    createSendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

// RESET PASSWORD
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: 'Email tidak terdaftar',
      });
    }

    const token = signToken(user.id);

    await user.update({ resetPasswordLink: token });

    const templateEmail = {
      from: 'IMPOSTOR TEAM',
      to: email,
      subject: 'Link Reset Password',
      html: `<p>Silakan klik link di bawah ini untuk reset password Anda! </p> <p>${process.env.CLIENT_URL}/reset-password/${token}</p>`,
    };

    kirimEmail(templateEmail);

    return res.status(200).json({
      status: true,
      email: 'Link reset password berhasil terkirim!',
    });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    console.log('token:', token);
    console.log('password:', password);

    const user = await User.findOne({
      where: {
        resetPasswordLink: token,
      },
    });
    console.log(user);
    if (user) {
      const hash = await bcrypt.hash(password, 12);
      user.password = hash;
      await user.save();
      return res.status(201).json({
        status: true,
        message: 'password berhasil diganti',
      });
    }
  } catch (error) {
    next(error);
  }
};
