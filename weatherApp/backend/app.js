import express from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://weather-app-view.herokuapp.com'] }));
app.use(express.json());

// prase data: take some data and convert it to other type of data (he doesn't  change the data);

const numbers = [0, 1, 2, 3, 4];

app.get('/weather/:location', async (req, res) => {
  try {
    const { location } = req.params;
    const URL = `https://api.weatherapi.com/v1/current.json?key=<please use you key here!!!!!>&q=${location}`;
    const { data: weather } = await axios.get(URL);
    res.json(weather);
  } catch (error) {
    res.json(error);
  }
});
app.post('/numbers', (req, res) => {
  numbers.push(numbers.length);
  res.json(numbers);
});
app.delete('/numbers', (req, res) => {
  numbers.pop();
  res.json(numbers);
});
app.put('/numbers/:index', (req, res) => {
  const { index } = req.params;
  const { value } = req.body;
  numbers[index] = value;
  res.send(numbers);
});


const PORT = process.env.PORT || 5050;
app.listen(PORT, (error) => {
  if (error) console.error(error);
  else console.log(`Server is up and running on port ${PORT}`);
});
