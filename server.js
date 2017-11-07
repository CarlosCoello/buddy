const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const search = require('./routes/search')(router);
const register = require('./routes/register')(router);
const positions = require('./routes/positions')(router);
const profile = require('./routes/profile')(router);
const upgrade = require('./routes/upgrade')(router);
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

// mongoose promise
mongoose.Promise = global.Promise;

// connect to db
const promise = mongoose.connect(config.uri, {
    useMongoClient: true
});

promise.then( function(db){
    console.log('conected to db: ', db.name);
}).catch( (e) => {
    console.log('unable to connect to db', e);
})

// cors
app.use(cors());
//app.options('*', cors())

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.use('/search', search);
app.use('/register', register);
app.use('/positions', positions);
app.use('/profile', profile);
app.use('/upgrade', upgrade);
app.use('/authentication', authentication);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
    console.log('listening on port :' + port);
});