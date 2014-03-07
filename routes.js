module.exports = function(app, passport) {

	// Services
	var PageService = require('./services/pages'),
		BlogService = require('./services/blog'),
		AdminService = require('./services/admin'),
		ContentService = require('./services/content');

	// Routes
	app	.use('/pages', new PageService())
		.use('/blog', new BlogService())
		.use('/admin', isAuthenticated, new AdminService())
		.use('/content', isAuthenticated, new ContentService());


	// Twitter authentification path
	app .get('/auth/twitter', passport.authenticate('twitter'))
		.get('/auth/twitter/callback', passport.authenticate('twitter', 
		  { 
		    successRedirect: '/',
		    failureRedirect: '/login' 
		  }))
		};

function isAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		next();
	} else {
		next(new Error(401));
	}
}
		