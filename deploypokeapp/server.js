const express = require('express');
const mongoose = require('mongoose');


const app = express();

require('dotenv').config();
const port = process.env.PORT || 3003;

//connect mongoose database
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open',()=>{
    console.log('Connected to mongo');
});

//middleware
app.use(express.urlencoded({extended:false}));

//set views
app.set('view engine','jsx');

//initialize engine
app.engine('jsx',require('express-react-views').createEngine());

//data
const Pokemon = require("./models/Pokemon");

//routes
//index
app.get('/pokemon',(req,res)=>{
    Pokemon.find({},(err, allPoke)=>{
        res.render('Index',{pokemon:allPoke});
    });
});

//new
app.get('/pokemon/new',(req,res)=>{
    res.render('New');
});

//post 
app.post('/pokemon', (req,res)=>{
    Pokemon.create(req.body,(err, createdPoke)=>{
        res.redirect('/pokemon');
    });
});

//show
app.get('/pokemon/:id',(req,res)=>{
    Pokemon.findById(req.params.id,(err,foundPoke)=>{
        res.render('Show',{pokemon : foundPoke});
    });

});

//port
app.listen(port,()=>{
    console.log('Listening on port ', port);
});