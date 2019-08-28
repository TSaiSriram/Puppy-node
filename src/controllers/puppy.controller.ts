import * as express from 'express';
import SampleService from "../services/sample.service";

export default class sampleController {
    private readonly sampleService = new SampleService();
    public readonly router = express.Router();

    getMethod = (request: express.Request, response: express.Response) => {
        response.send(this.sampleService.findAllSamples());
    };

}