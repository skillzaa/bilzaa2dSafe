"use strict";
var BasePrimtive = require("./BasePrimtive.js")["default"];

var Circle = require("./Circle.js")["default"];

exports["default"] = class Complex extends BasePrimtive {
    constructor() {
        super("complex");
        this.circle = new Circle();
    }
    draw() {
        this.circle.attributes.setProperty("x", 600);
        this.circle.attributes.setProperty("y", 200);
        this.circle.attributes.setProperty("radius", 150);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 100);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 50);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 25);
        this.circle.draw();
    }
}