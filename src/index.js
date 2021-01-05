import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// treat public directory to outside world
app.use(express.static('public'));

// script will look at static directory and search for bundle.js file
app.get('*', (req, res) => {
  const store = createStore();

  // Some logic to initialize and load data into the store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
