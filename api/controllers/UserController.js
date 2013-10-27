module.exports = {

  create: function (req,res) {
	User.create({
		username : req.param('user'),
		password : req.param('pass')
	}).done(function(error, user) {
		if(error){
			console.log(error);
    			res.json({
				success : false,
				message : error			
			});
		} else {
    			console.log("User created :", user);
    			res.json({
				success : true,
				message : "User "+req.param('user')+' berhasil dibuat'		
			});
			User.subscribe( req.socket );
			User.publishCreate({
				username: req.param('user'),
				password: req.param('pass'),
			});
  		}
	});
  }
};
