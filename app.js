const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('pls dont pay attention to my last example msg idk what im doing'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
