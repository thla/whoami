var express = require('express')
var app = express()

app.get('/', function (req, res) {
    var j = {};
    j.ipaddress = req.connection.remoteAddress;
    j.language = req.headers["accept-language"];
    j.software = req.headers['user-agent'];
    res.json(j);
    res.end();
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})