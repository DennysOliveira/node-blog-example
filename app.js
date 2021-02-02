require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const apiRoutes = require('./routes/apiRoutes')


// create express app
const app = express();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true 
    })
    .then(( result ) => {
        console.log('db connected')
        
        // listen for requests on port 3000
        app.listen(process.env.PORT, () => {
            console.log("Server listening on port 3000.")
        })
    })
    .catch(( err ) => console.log(err))

// register view engine
app.set('view engine', 'ejs');

// Middleware and Static Pages
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.get('/', ( request, response ) => {
    response.redirect('/blogs')
})

// About
app.get('/about', ( request, response ) => {
    // Send HTML file
    response.render('about', {
        title: 'About'
    });
})

// Blog routes
app.use('/blogs', blogRoutes);

// API Routes
// app.use('/api', apiRoutes);

// 404 Route if any of those above aren't met
app.use(( req, res ) => {
    res.status(404).render('404', {
        title: '404'
    });
})
