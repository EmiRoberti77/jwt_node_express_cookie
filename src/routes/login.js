const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const getUser = async (username) => {
  return { userId: '123', password: 'password', username };
};
const sk = process.env.SECRET_KEY;

module.exports = (app) => {
  app.post('/login', async (req, res) => {
    const { password, username } = req.body;
    const user = await getUser(username);

    if (password !== user.password) {
      return res.status(403).json({
        error: 'invalid user',
      });
    }
    delete user.password;

    const token = jwt.sign(user, sk, {
      expiresIn: '1h',
    });

    res.cookie('token', token, {
      httpOnly: true,
    });

    return res.redirect('/welcome');
  });
};
