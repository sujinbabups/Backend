const express = require('express');
const app = express();

function log(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(log);

/
app.get('/', (req, res) => {
  res.send("Login Success");
});

app.get('/products', (req, res) => {
  res.send('Welcome to our products');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


