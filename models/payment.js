const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
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
    address: { 
        type: String, 
        required: true, 
        lowercase: true
    },
    city: { 
        type: String, 
        required: true, 
        lowercase: true 
    },
    state: { 
        type: String, 
        required: true, 
        lowercase: true 
    },
    card: { 
        type: String, 
        required: true, 
        lowercase: true
    },
    cardType: { 
        type: String, 
        required: true,
        lowercase: true
    },
    cardNum: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    userid: {
      type: String,
      unique: true,
      required: true
    }
});


module.exports = mongoose.model( 'Payment', paymentSchema );
