const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure Container Apps updated!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
