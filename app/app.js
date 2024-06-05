const express = require('express');
const app = express();
const port = 8090;

app.get('/', (req, res) => {
  res.send('Hello World! GS de CLOUD DEVELOPER 06/04/2024');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});