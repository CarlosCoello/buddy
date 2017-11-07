const User = require('../models/user');
const config = require('../config/database');

module.exports = (router) => {

    router.get('/profileInfo/:id', (req, res) => {
        if(!req.params.id){
            res.send({ success: false, message: 'no id was received' });
        } else {
            User.findOne({ _id: req.params.id }, (err, profile) => {
                if(err){
                    res.send({ success: false, message: 'an error happened' });
                } else {
                    res.send({ success: true, profile: profile });
                }
            })
        }
    });

    router.put('/updateProfileEmail', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'data was not received' });
        } else {
            User.update({ _id: req.body.id },{ $set: { email: req.body.email } }, (err, update) => {
                if(err){
                    res.send({ success: false, message: 'error happend' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.put('/updateProfileFirstName', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'data was not received' });
        } else {
            User.findOneAndUpdate({ _id: req.body.id },{ $set: { firstname: req.body.firstname } }, (err, update) => {
                if(err){
                    res.send({ success: false, message: 'error happend' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    router.put('/updateProfileLastName', (req, res) => {
        if(!req.body){
            res.send({ success: false, message: 'data was not received' });
        } else {
            User.update({ _id: req.body.id },{ $set: { lastname: req.body.lastname } }, (err, update) => {
                if(err){
                    res.send({ success: false, message: 'error happend' });
                } else {
                    res.send({ success: true, update: update });
                }
            });
        }
    });

    return router;
}