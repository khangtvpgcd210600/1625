const express = require('express');
const app = express();
const PORT = 3000;

// Define routes and middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
