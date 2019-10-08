const express = require('express');
const cors = require('cors');

const app = express();
const dataToSend = require('./data.json');

// Prevent CORS problems (not safe in this configurations but it works)
app.use(cors());
app.options('*', cors());

// Parse URL-encoded bodies (for example, sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (sent by API)
app.use(express.json());

// GET endpoint
app.get('/api/data', function (req, res) {
   console.log('GET::/api/data');
   console.log(req.query);
   res.end(JSON.stringify(dataToSend));
});

// POST endpoint
app.post('/api/data', function (req, res) {
   console.log('POST::/api/data');
   console.log(req.body);
   res.end('POST::/api/data');
})

const server = app.listen(8081, function () {
   const addressData = server.address();
   console.log("Example app listening at http://%s:%s", addressData.address, addressData.port);
});
