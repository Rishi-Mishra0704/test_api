const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  res.json({ message: `Hello, ${username}!` });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
