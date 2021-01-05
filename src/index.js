import 'babel-polyfill'
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// treat public directory to outside world
app.use(express.static('public'));

// script will look at static directory and search for bundle.js file
app.get('*', (req, res) => {
  const store = createStore();

  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  })

  // Some logic to initialize and load data into the store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
