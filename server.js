const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/burn-cpu') {
        let x = 0.0001;
        for (let i = 0; i <= 5000000; i++) { x += Math.sqrt(x); }
        res.end("Heavy traffic simulated! CPU worked hard.\n");
    } else {
        res.end("Welcome to our Netflix Clone!\n");
    }
});

server.listen(8080, () => {
    console.log("App is running on port 8080");
});
