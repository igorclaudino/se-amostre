import { config } from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

config();

class AppController {
  express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(express.urlencoded({ extended: false }));
  }

  routes() {}
}

export default new AppController();
