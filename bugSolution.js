const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send('Request body is empty');
    }
    const data = req.body;
    // Process the data
    console.log(data);
    res.send('Data received');
  } catch (error) {
    console.error('Error parsing request body:', error);
    res.status(400).send('Invalid JSON in request body');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));