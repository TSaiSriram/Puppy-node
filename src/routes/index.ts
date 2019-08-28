import { Application } from 'express';
import puppyRoute from "../routes/puppy.route";
export class Routes {
    public routes(app: Application): void {
        app.use('/', puppyRoute)
    }
}