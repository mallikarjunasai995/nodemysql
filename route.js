var express = require('express');

module.exports = function (app, pool) {  
    require('./API/user.api')(app,pool);  
        app.get('/', function (req, res) {  
            res.send("Welcome to C-sharp corner Api");  
        });  
    };

//    module.exports = app;
