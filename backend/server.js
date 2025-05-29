const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 4000; // Set the port to the value from environment variables or default to 3000

const server = http.createServer(app);


server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

