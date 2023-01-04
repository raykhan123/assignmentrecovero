const express = require( 'express' );
const mongoose = require( 'mongoose' );
require('dotenv').config();
const adminRoutes = require( './routes/adminRoutes.js' );
const userRoutes = require( './routes/userRoutes.js' );
const multer = require( 'multer' )
const cors = require( 'cors' )
const passport = require( 'passport' )

const app = express();

app.use( cors() );
app.use( multer().any() )
app.use( passport.initialize() );



const PORT = process.env.PORT || 5000;

app.use( express.json() );





mongoose.connect( process.env.DB_CON, { useNewUrlParser: true } )
    .then( () => { console.log( 'DB Conncted Successfully 🎧' ) } )
    .catch( ( err ) => { console.log( err.message ) } )

app.use( '/admin', adminRoutes )
app.use( '/user', userRoutes )


app.listen( PORT, () =>
{
    console.log( `Application is running on 🌎 ${ 5000 } Port` )
} )