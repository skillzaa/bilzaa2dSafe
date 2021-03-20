"use strict";
var Rectangle = require("./Rectangle.js")["default"];

var SimpleRectangle = require("./SimpleRectangle.js")["default"];

var Circle = require("./Circle.js")["default"];

var Triangle = require("./Triangle.js")["default"];

var Text = require("./Text.js")["default"];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
exports["default"] = class Element {
    constructor() {
        this.shapes = [];
    }
    addRectangle() {
        const rectangle = new Rectangle();
        this.shapes.push(rectangle);
        return rectangle;
    }
    addCircle() {
        const circle = new Circle();
        this.shapes.push(circle);
        return circle;
    }
    addText() {
        const text = new Text();
        this.shapes.push(text);
        return text;
    }
    addTriangle() {
        const triangle = new Triangle();
        this.shapes.push(triangle);
        return triangle;
    }
    addSimpleRectangle() {
        const simpleRectangle = new SimpleRectangle();
        this.shapes.push(simpleRectangle);
        return simpleRectangle;
    }
}