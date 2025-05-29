const dotenv = require('dotenv'); // ued for to load environment variables
dotenv.config(); 

const express = require('express'); // used for creating the server and handling requests
const cors = require('cors'); // used for enabling CORS (Cross-Origin Resource Sharing)


const app = express();


app.use(cors()); // Enable CORS for all routes


app.get('/', (req,res) => {
    res.send('Hello World!');
})

module.export = app;