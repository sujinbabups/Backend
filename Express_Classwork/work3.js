const express = require('express');
const app = express();

app.use(express.json());


app.post('/reviews', (req, res) => {
  const { bookTitle, reviewContent } = req.body;


  res.status(201).json({ "review status": 'Review submitted successfully.', review: { bookTitle, reviewContent } });
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
