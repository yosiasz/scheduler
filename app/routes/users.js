app.get('/api/users/', function(req,res){
	connection.query('SELECT userid, username, firstname, lastname FROM users', req.params.id, function(err, rows, fields) {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			res.send({
				result: 'error',
				err:    err.code
			});
		}
		res.send(rows);
	});
});
//buildings
app.get('/api/persons/', function(req,res){
	connection.query('SELECT personid, firstname, lastname FROM persons', req.params.id, function(err, rows, fields) {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			res.send({
				result: 'error',
				err:    err.code
			});
		}
		res.send(rows);
	});
});
app.post('/api/users', function(req, res){
    //console.log(req.body);
    //res.json(req.body);
    
    var insertPerson = 'INSERT INTO persons(firstname, lastname) values ("' + req.body.firstname + '","' +  req.body.lastname + '")';
    console.log(insertPerson);
    //mysql.query('insert into '+ TABLE +' (name, price) values ("' + req.body.name + '", "' + req.body.name.price + '")',

    connection.query('INSERT INTO persons(firstname, lastname) values ("' + req.body.firstname + '","' +  req.body.lastname + '")', req.params.id, function(err, rows, fields) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.send({
                    result: 'error',
                    err:    err.code
                });
            }
            res.send(rows);
        });

});