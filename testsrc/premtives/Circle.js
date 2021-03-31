"use strict";
var BasePrimtive = require("./BasePrimtive.js")["default"];

exports["default"] = class Circle extends BasePrimtive {
    constructor() {
        super("circle");
        this.attributes.add({ name: "radius", value: 100, comments: "" });
    }
    draw() {
        this.metal.drawEllipse(this.attributes);
    }
}