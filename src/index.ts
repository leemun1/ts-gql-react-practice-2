import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res, _next) => {
  res.send('Hello world!');
});

app.listen(4000, () => {
  console.log('Server listening on PORT 4000');
});
