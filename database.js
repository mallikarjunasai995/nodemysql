var mysql = require('mysql');  
module.exports = function handle_db(req, res) {  
    var pool = mysql.createPool({  
        connectionLimit: 100,  
        host: 'localhost',  
        user: 'root',  
        password: 'techm123',  
        database: 'test'  
    });  
    pool.getConnection(function (err, connection) {  
        if (err) {  
            console.error("This is error msg, when connecting to db: " + err);  
            connection.release();  
            res.json({ "code": 100, "status": "Error in connecting database" });  
            return;  
        }  
        console.log("from db config: connected as id: " + connection.threadId);  
        connection.on('error', function (err) {  
            res.json({ "code": 100, "status": "Error in connection database" });  
            return;  
        });  
        return connection;  
    });  
return pool;  
}