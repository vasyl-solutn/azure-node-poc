const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Azure Container Apps!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
