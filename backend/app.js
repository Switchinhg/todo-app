import express from 'express'
import notasRouter from './routes/notasRouter.js'
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());


app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Endpoint */
app.use("/api/notas", notasRouter);

app.listen(port, () => {
  console.log(`API corriendo en -> http://localhost:${port}`);
});

