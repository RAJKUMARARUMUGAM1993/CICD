const express = require('express');
const app = express();
const port = 7000;

app.get('/get', (req, res) => {
  res.send('Hello World boss!');
});

app.get('/aws1', (req, res) => {
  res.send('CICD Pipeline working Done...!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
