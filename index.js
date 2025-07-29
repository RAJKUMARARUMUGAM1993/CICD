const express = require('express');
const app = express();
const port = 7000;

app.get('/get', (req, res) => {
  res.send('Hello World!');
});

app.get('/aws', (req, res) => {
  res.send('CICD Pipeline working...!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
