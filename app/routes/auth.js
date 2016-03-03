app.get('/api/auth/logout',function(req,res){

	req.session.destroy(function(err){
	if(err){
	console.log(err);
	}
	else
	{
	res.redirect('http://localhost:8000/index.html');
	}
	});

});

app.post('/api/auth/signup', function(req, res){
    //stub good to use for testing
    //console.log(req.body);
    //res.json(req.body);
    
    var insertPerson = 'INSERT INTO persons(firstname, lastname) values ("' + req.body.firstname + '","' +  req.body.lastname + '")';
    console.log(insertPerson);
	
    //mysql.query('insert into '+ TABLE +' (name, price) values ("' + req.body.name + '", "' + req.body.name.price + '")',

	connection.query('INSERT INTO persons(firstname, lastname, email, password, phone) values ("' + 
	                                     req.body.firstname + '","' +  req.body.lastname + '","' + req.body.email + '","' + req.body.password + '","' + req.body.phone + '")', 
										 req.params.id, function(err, rows, fields) {
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
app.post('/api/auth/login', function(req, res){
	
	sess=req.session;

	var email = req.body.email;
	var password = req.body.password;
	
	sess.email = email;
	sess.password = password;

 	connection.query('SELECT personid, firstname, lastname,email FROM persons where email = "' + email + '" and password = "' + password + '"', req.params.id, function(err, results, fields) {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			res.send({
				result: 'error',
				err:    err.code
			});
		}
		res.send(results);
	});   
 
});  
app.post('/api/auth/login/session',function(req,res){
	sess = req.session;
    
	//In this we are assigning email to sess.email variable.
	//email comes from HTML page or form data if you are using some sort of
	//browser plugin such as POSTMAN
	sess.email = req.body.email;
	sess.password = req.body.password;
	
	console.log(sess.password);
	console.log(sess.email);
	//jsonize return
	res.send({
				email:		sess.email,
				password:	sess.password
			})	

});
app.post('/api/auth/logout2', function(req, res){
    //stub good to use for testing but cannot use again because of error can't set headers after they are sent
    //console.log(req.body.email);
    //res.json(req.body.password);
    
	
 	connection.query('SELECT * FROM persons where email = "' + req.body.email + '" and password = "' + req.body.password + '"', req.params.id, function(err, rows, fields) {
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
