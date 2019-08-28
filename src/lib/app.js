"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var App = /** @class */ (function () {
    function App(routes, port) {
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(routes);
    }
    App.prototype.initializeMiddlewares = function () {
        this.app.use(bodyParser.json());
    };
    App.prototype.initializeControllers = function (routers) {
        var _this = this;
        routers.forEach(function (route) {
            _this.app.use('/start', route.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server is running on the port " + _this.port);
        });
    };
    return App;
}());
exports.default = App;
