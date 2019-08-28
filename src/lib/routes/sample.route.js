"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var sample_service_1 = __importDefault(require("../services/sample.service"));
var SampleRoute = /** @class */ (function () {
    function SampleRoute() {
        var _this = this;
        this.PATH = '/samples';
        this.sampleService = new sample_service_1.default();
        this.router = express.Router();
        this.get = function (request, response) {
            response.send(_this.sampleService.findAllSamples());
        };
        this.initializeRoutes();
    }
    SampleRoute.prototype.initializeRoutes = function () {
        this.router.get(this.PATH, this.get);
    };
    return SampleRoute;
}());
exports.default = SampleRoute;
