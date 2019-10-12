
var express = require('express');
module.exports = function (app, pool) {  
    app.get('/api/users', function (req, res) {  
        var con = pool.getConnection(function (err, con) {  
            con.query('SELECT * FROM users', function (err, rows) {  
                if (!err) {  
                    console.log(rows);  
                    res.json(rows);  
                }  
                else {  
                    console.error("From users.api.js :" + err);  
                    res.json(err);  
                }  
                con.release();  
            });  
        });  
    });  
    app.get('/api/users/:id', function (req, res) {  
        con = pool.getConnection(function (err, con) {  
            con.query('SELECT * FROM users where userid=?', [req.params.id], function (err, rows) {  
                if (!err) {  
                    console.log(rows);  
                    res.json(rows);  
                }  
                else {  
                    console.error("From users.api.js :" + err);  
                    res.json(err);  
                }  
                con.release();  
            });  
        });  
    });  
    // app.put('/api/users/:id', function (req, res) {  
    //     con = pool.getConnection(function (err, con) {  
    //         con.query('UPDATE users SET UserName=? , Description=? where UserID=?', [req.body.username, req.body.desc, req.params.id], function (err, rows) {  
    //             if (!err) {  
    //                 console.log(rows);  
    //                 res.json(rows);  
    //             }  
    //             else {  
    //                 console.error("From users.api.js :" + err);  
    //                 res.json(err);  
    //             }  
    //             con.release();  
    //         });  
    //     });  
    // });  
    //     app.post('/api/users/', function (req, res) {  
    //     con = pool.getConnection(function (err, con) {  
    //         con.query('INSERT INTO users (UserID,UserName,Description) VALUES(?,?,?)', [req.body.userid,req.body.username, req.body.desc], function (err, rows) {  
    //             if (!err) {  
    //                 console.log(rows);  
    //                 res.json(rows);  
    //             }  
    //             else {  
    //                 console.error("From users.api.js :" + err);  
    //                 res.json(err);  
    //             }  
    //             con.release();  
    //         });  
    //     });  
    // });  
    //   app.delete('/api/users/:id', function (req, res) {  
    //     con = pool.getConnection(function (err, con) {  
    //         con.query('DELETE FROM users WHERE UserID=?', [req.params.id], function (err, rows) {  
    //             if (!err) {  
    //                 console.log(rows);  
    //                 res.json(rows);  
    //             }  
    //             else {  
    //                 console.error("From users.api.js :" + err);  
    //                 res.json(err);  
    //             }  
    //             con.release();  
    //         });  
    //     });  
    // });  
};


