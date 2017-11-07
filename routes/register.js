const User = require('../models/user');
const Payment = require('../models/payment');
const config = require('../config/database');

module.exports = (router) => {

    // register employer

    router.post('/newUser', (req, res) => {
        if(req.body.candidate === true){
            user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                account: 'candidate'
            });
            user.save( (err, newuser) => {
                if(err){
                    res.send({ success: false, message: 'unable to register' });
                } else {
                    res.send({ success: true, message: 'registration was succesful', newuser: newuser });
                }
            });
        } else {
            user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                account: 'employer'
            });
            user.save( (err, newuser) => {
                if(err){
                    res.send({ success: false, message: 'unable to register' });
                } else {
                    res.send({ success: true, message: 'registration was succesful', newuser: newuser });
                }
            });
        }
    });

    router.post('/paymentInfo', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'data is required' });
        } else {
            payment = new Payment({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                card: req.body.card,
                cardType: req.body.cardType,
                cardNum: req.body.cardNum,
                userid: req.body.userid
            });
            payment.save( (err, payment) => {
                if(err){
                    res.send({ success: false, message: 'error happened not able to save data' });
                } else {
                    res.send({ success: true, payment: payment });
                }
            });
        }
    });

    router.get('/userPaymentInfo/:id', (req, res) => {
        if(!req.params.id){
            res.send({ success: false, message: 'id is required' });
        } else {
            Payment.findOne({ userid: req.params.id }, (err, userpayment) => {
                if(err){
                    res.send({ success: false, message: 'no user found with the id you submitted' });
                } else {
                    res.send({ success: true, userpayment: userpayment });
                }
            });
        }
    });

    router.post('/updatePaymentFirstName', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { firstname: req.body.firstname } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentLastName', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { lastname: req.body.lastname } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentAddress', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { address: req.body.address } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentCity', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { city: req.body.city } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentState', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { state: req.body.state } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentCard', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { card: req.body.card } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentCardType', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { cardType: req.body.cardtype } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.post('/updatePaymentCardNum', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'no data received' });
        } else {
            Payment.findOneAndUpdate({ _id: req.body.id }, { $set: { cardNum: req.body.cardnum } }, (err, update) =>  {
                if(err){
                    res.send({ success: false, message: 'unable to update' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    return router;
}