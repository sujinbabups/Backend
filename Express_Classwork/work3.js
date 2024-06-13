

const express = require('express');
const app = express();

app.use(express.json());


app.post('/reviews', (req, res) => {
  const { bookTitle, reviewContent } = req.body;

 
  if (!bookTitle || !reviewContent) {
    return res.status(400).json({ error: 'Book title and review content are required.' });
  }

  res.status(201).json({ message: 'Review submitted successfully.', review: { bookTitle, reviewContent } });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});