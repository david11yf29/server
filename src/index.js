import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// treat public directory to outside world
app.use(express.static('public'));

// script will look at static directory and search for bundle.js file
app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html)
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
