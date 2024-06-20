const express = require('express');
const app = express();

function log(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(log);


app.get('/', (req, res) => {
  res.send("Login Success");
});

app.get('/buy', (req, res) => {
  res.send('select products.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


