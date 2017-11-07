//const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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
  

const positionSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    eName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    eAddress: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    eCity: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    eState: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trime: true,
        validate: emailValidators
    },
    eCreatedAtPos: {
        type: Date,
        default: Date.now
    },
    eUpdatedPos: {
        type: Date,
        default: ''
    }
});

module.exports = mongoose.model( 'Position', positionSchema );