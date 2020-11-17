// dependencies
const http = require('http');
const url = require('url');
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
    //request handling
    // get the url parse it
    const parsedUrl = url.parse( req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    console.log(queryStringObject);
    res.end('hello world lhkj');
};


// start server
app.createServer();

