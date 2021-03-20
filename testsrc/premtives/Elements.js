"use strict";
var Rectangle = require("./Rectangle.js")["default"];

var SimpleRectangle = require("./SimpleRectangle.js")["default"];

var Circle = require("./Circle.js")["default"];

var Triangle = require("./Triangle.js")["default"];

var Text = require("./Text.js")["default"];

var Complex = require("./Complex.js")["default"];

exports["default"] = class Elements {
    constructor() {
        this.shapes = [];
    }
    addRectangle() {
        const rectangle = new Rectangle();
        this.shapes.push(rectangle);
        return rectangle;
    }
    addComplex() {
        const complex = new Complex();
        this.shapes.push(complex);
        return complex;
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