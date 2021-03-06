import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Routes } from './routes/';
// Something changed                          data                           
class App {
    public app: express.Application
    public routePrv: Routes = new Routes()

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app)
    }



    private config(): void {
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }
}

export default new App().app