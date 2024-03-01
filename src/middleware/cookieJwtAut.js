const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const sk = process.env.SECRET_KEY;
exports.cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, sk);
    console.log('user from token', user);
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.redirect('/');
  }
};
