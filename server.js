#!/usr/bin/env node
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.send('Hello from Termux Node.js!');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
