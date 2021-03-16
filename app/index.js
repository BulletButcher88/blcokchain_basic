const express = require('express');
const Blockchain = require('../blockchain/index');


const HTTP_PORT = process.env.HTTP_PORT || 3008;

const app = express();
const bc = new Blockchain();

app.get('./blocks', (req, res) => {
  res.json(bc.chain);
})

app.post('./blocks', (req, res) => {
  req.json(bc.chain);
})

app.listen(HTTP_PORT, () => console.log(`Listing on port ${HTTP_PORT}`))