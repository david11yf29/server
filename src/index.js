import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// treat public directory to outside world
app.use(express.static('public'));

// script will look at static directory and search for bundle.js file
app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
