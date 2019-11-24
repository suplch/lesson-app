const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/userinfo', function (req, res) {
   res.send({
       code: 100,
       msg: 'ok'
   })
});

app.get('/servertime', function (req, res) {
    res.send({
        code: 100,
        msg: 'time is ' + new Date().toLocaleString()
    })
});


const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log(`listening http://localhost:${port}`);
});
