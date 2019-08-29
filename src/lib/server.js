"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var sample_route_1 = __importDefault(require("./routes/sample.route"));
var app = new app_1.default([
    new sample_route_1.default()
], 8080);
app.listen();
