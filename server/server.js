var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var fs = require('fs');

//Initialize express
var app = express();

//Set template config
app.engine('.hbs', exphbs({'extname': '.hbs'}));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', '.hbs');

// Disable etag
app.set('etag', false);

var port = '8080';

// Disable powered by
app.disable('x-powered-by');
app.use(express.static('assets'))


// listen for given url pattern for given app id
app.get('/gallery*', function (req, res) {
	var foldername = req.query['fn'];
	const folderPath = './assets/gallery/' + foldername;
	var images = [];
	fs.readdir(folderPath, (err, files) => {
		if(err || files.length === 0){
			res.render('galleryTemplate', {"images" : []});
		} else {
			const imagePath = '/assets/gallery/' + foldername;
			files.forEach(file => {
				images.push(imagePath+ "/"  +file);
			});
			res.render('galleryTemplate', {"images" : images});
		}
		
	})
    

});

// Start the server
app.listen(port, function() {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Express server listening on port %s', port);
    }
});