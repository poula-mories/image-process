import express from 'express';
import path from 'path';
import placeholder from './placeholderFun';
import routes from './routes';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/placeholder', placeholder);

app.get('/resize', routes);

app.listen(port, () => {
  console.log(`server work over port: ${port}`);
});

export default app;
