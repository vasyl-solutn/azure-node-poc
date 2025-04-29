const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure Container Apps updated Tue 29 Apr 2025!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
