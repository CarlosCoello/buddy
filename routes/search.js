const Fuse = require('fuse.js');
const Position = require('../models/position');
const config = require('../config/database');

module.exports = (router) => {

    router.get('/getSearch/:search/:city/:state', (req, res) => {

        if(!req.params.search) {
            res.send({ success: false, message: 'serach parameter is required' });
        } else {
            if(!req.params.city){
                res.send({ success: false, message: 'city parameter is required' });
            } else {
                if(!req.params.state) {
                    res.send({ success: false, message: 'state parameter is required' });
                } else {
                //var search = new RegExp(req.params.search);
                Position.find({ $and : [{ $text: { $search: req.params.search } }, { eCity: req.params.city }, { eState: req.params.state }] }, (err, positions) => {
                        if(err) {
                            res.send({ success: false, message: 'no positions found for your search' });
                        } else {
                            res.send({ success: true, positions: positions });
                        }
                    });
                }
            }
        }
        // Position.find({}, (err, positions) => {
        //     if(err){
        //         res.send({ success: false, message: 'unable to get position ' + err });
        //     } else {
        //         res.send({ success: true, positions: positions });
        //     }
        // });
    });

    router.get('/getPosition/:id', (req, res) => {
        if(!req.params) {
            res.send({ success: false, message: 'id parameter is required' });
        } else {
            Position.findOne({ _id: req.params.id }, (err, position) => {
                if(err){
                    res.send({ success: false, message: 'unable to find that position' });
                } else {
                    res.send({ success: true, position: position });
                }
            });
        }
    });

    return router;
}