const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const bcrypt = require( 'bcrypt-nodejs' );
const Schema = mongoose.Schema;

//Email validation length
let emailLength = ( email ) => {
  if( !email ){
    return false;
  } else {
    if( email.length < 5 || email.length > 30 ){
      return false;
    } else {
      return true;
    }
  }
};

//email validation RegExp
let validEmail = ( email ) => {
  if( !email ){
    return false;
  } else {
    const regExp = new RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
    return regExp.test( email );
  }
};

const emailValidators = [
  {
    validator: emailLength,
    message: 'Email must be at least 5 characters but no more than 30'
  },
  {
    validator: validEmail,
    message: 'Must be a valid email'
  }
];

let usernameLength = ( username ) => {
  if( !username ){
    return false;
  } else {
    if( username.length < 3 || username.length > 15 ){
      return false;
    } else {
      return true;
    }
  }
};

let validUsername = ( username ) => {
  if( !username ){
    return false;
  } else {
    const regExp = new RegExp( /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ );
    return regExp.test( username );
  }
};

const usernameValidators = [
  {
    validator: usernameLength,
    message: 'Username must be at least 3 characters but no more than 15'
  },
  {
    validator: validUsername,
    message: 'Username must have at least one Uppercase character, on Lowercase character and a special character'
  }
];

let passwordLength = ( password ) => {
  if( !password ){
    return false;
  } else {
    if( password.length < 8 || password.length > 35 ){
      return false;
    } else {
      return true;
    }
  }
};

let validPassword = ( password ) => {
  if( !password ){
    return false;
  } else {
    const regExp = new RegExp( /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ );
    return regExp.test( password );
  }
};

const passwordValidators = [
  {
    validator: passwordLength,
    message: 'Password must be at least 8 characters and no more than 35'
  },
  {
    validator: validPassword,
    message: 'Password must have at least once uppercase, lowercase, special character and number '
  }
]

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        validate: emailValidators
    },
    username: { 
        type: String, 
        required: true, 
        unique: true,  
        validate: usernameValidators
    },
    password: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: passwordValidators
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    account: {
      type: String
    }
});

userSchema.pre( 'save', function( next ) {
  if( !this.isModified( 'password' ) ){
    return (next);
  } else {
    bcrypt.hash( this.password, null, null, ( err, hash ) => {
      if( err ) {
        return next ( err );
      } else {
        this.password = hash;
        next();
      }
    });
  }
});

userSchema.methods.comparePassword = function( password ){
  return bcrypt.compareSync( password, this.password );
};

module.exports = mongoose.model( 'User', userSchema );
