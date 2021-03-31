"use strict";
var linear = require("./linear.js")["default"];

var randomNumber = require("./randomNumber.js")["default"];

var randomColor = require("./randomColor.js")["default"];

var blink = require("./blink.js")["default"];

exports["default"] = class Algorithms {
    constructor() {
    }
    getAlgo(name) {
        switch (name) {
            case "linear":
                return linear;
                break;
            case "randomNumber":
                return randomNumber;
                break;
            case "randomColor":
                return randomColor;
                break;
            case "toggle":
                return blink;
                break;
            default:
                return linear;
                break;
        }
        //return "ok";//just to shut typescript off    
    }
}