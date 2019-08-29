"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SampleService = /** @class */ (function () {
    function SampleService() {
        this.samples = [
            {
                name: 'FourthOfAugust'
            }
        ];
    }
    SampleService.prototype.findAllSamples = function () {
        return this.samples;
    };
    return SampleService;
}());
exports.default = SampleService;
