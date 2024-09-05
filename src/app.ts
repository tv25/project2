import express from 'express';
import helloController from './control';

const app = express();
const port = 7000;

app.get('/hello', helloController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
