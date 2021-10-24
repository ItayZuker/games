const express = require('express');
const Random_Square_Box_Rout = require('./routs/random_square_box.rout.js')
const app = express();
const path = require('path')
require('./db.js');

app.set('json spaces', 2);
app.use(express.json());

app.use('/random-square-box', Random_Square_Box_Rout);

app.use('/', express.static(path.join(__dirname, '../client/build')));

app.use(express.static(__dirname));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

let port = 8080;
if(process.env.PORT) {
    port = process.env.PORT
};

app.listen(port, () => {
    console.log('server is running on port:' + port);
});