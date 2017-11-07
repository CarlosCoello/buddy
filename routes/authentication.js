const User = require('../models/user');
const jwt = require( 'jsonwebtoken' );
const config = require('../config/database');

module.exports = (router) => {

    router.post( '/login', ( req, res ) => {
        if( !req.body.username ){
          res.json({ success: false, message: 'No username was provided' });
        } else {
          if( !req.body.password ){
            res.json({ success: false, message: 'No password was provided' });
          } else {
            User.findOne({ username: req.body.username }, ( err, user ) => {
              if( err ){
                res.json({ success: false, message: err });
              } else {
                if( !user ){
                  res.json({ success: false, message: 'Username not found' });
                } else {
                  const passwordValidation = user.comparePassword( req.body.password );
                  if( !passwordValidation ){
                    res.json({ success: false, message: 'Password invalid' });
                  } else {
                    const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' });
                    res.json({ success: true, message: 'Success!', token: token ,  user: { id: user._id, username: user.username, email: user.email, account: user.account } });
                  }
                }
              }
            });
          }
        }
      });
    

    return router;
}