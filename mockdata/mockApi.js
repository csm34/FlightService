const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

const mockData = require(path.join(__dirname, 'mockData.json'));

app.get('/api/flights', (req, res) => {
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});
