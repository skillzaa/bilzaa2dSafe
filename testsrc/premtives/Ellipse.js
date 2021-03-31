"use strict";
var BasePrimtive = require("./BasePrimtive.js")["default"];

exports["default"] = class Ellipse extends BasePrimtive {
    constructor() {
        super("Ellipse");
        this.attributes.add({ name: "radius", value: 100, comments: "" });
    }
    draw() {
        this.metal.drawEllipse(this.attributes);
    }
}