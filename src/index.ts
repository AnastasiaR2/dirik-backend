import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  res.send("Welcome to Dirik's Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
