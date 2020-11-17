// dependencies
const http = require('http');
// app Object - module scaffolding
const app = {};
// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handelRegRes);
    server.listen(app.config.port, () => {
      console.log(`listen to port ${app.config.port}`);
    })
};
app.handelRegRes = (req, res) => {
    res.end('hello world lhkj');
};


// start server
app.createServer();
