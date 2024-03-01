const { cookieJwtAuth } = require('../middleware/cookieJwtAut');
module.exports = (app) => {
  app.post('/add', cookieJwtAuth, (req, res) => {
    console.log('request', req.body);
    console.log('query object', req.query);
    res.redirect('/welcome');
  });
};
