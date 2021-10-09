const express = require('express');
const Random_Square_Box_Rout = require('./routs/random_square_box.rout.js')
const app = express();
require('./db.js');

app.set('json spaces', 2);
app.use(express.json());



app.use('/random-square-box', Random_Square_Box_Rout);



let port = 8080
if(process.env.PORT) {
    port = process.env.PORT
}

app.listen(port, () => {
    console.log('server is running on port:' + port)
});