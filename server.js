const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const mongoose = require('mongoose');
var cors = require('cors');

// Routers
const postsRouter = require('./routes/api/newsPosts');
const gigsRouter = require('./routes/api/gigEvents');

//PORT
const PORT = process.env.PORT || 5000;

const app = express();


//Bodyparser Middleware
app.use(cors({
    credentials:true,
    origin: ['http://localhost:8000/gigs']
  }));
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;


//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/newsPosts', postsRouter);
app.use('/api/gigEvents', gigsRouter);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});
