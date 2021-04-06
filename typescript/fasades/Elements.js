"use strict";
exports.__esModule = true;
var Rectangle_js_1 = require("../premtives/Rectangle.js");
var Circle_js_1 = require("../premtives/Circle.js");
var Ellipse_js_1 = require("../premtives/Ellipse.js");
var Triangle_js_1 = require("../premtives/Triangle.js");
var Text_js_1 = require("../premtives/Text.js");
var Complex_js_1 = require("../premtives/Complex.js");
var Elements = /** @class */ (function () {
    function Elements() {
        this.shapes = [];
    }
    Elements.prototype.addRectangle = function () {
        var rectangle = new Rectangle_js_1["default"]();
        this.shapes.push(rectangle);
        return rectangle;
    };
    Elements.prototype.addComplex = function () {
        var complex = new Complex_js_1["default"]();
        this.shapes.push(complex);
        return complex;
    };
    Elements.prototype.addCircle = function () {
        var circle = new Circle_js_1["default"]();
        this.shapes.push(circle);
        return circle;
    };
    Elements.prototype.addEllipse = function () {
        var ellipse = new Ellipse_js_1["default"]();
        this.shapes.push(ellipse);
        return ellipse;
    };
    Elements.prototype.addText = function () {
        var text = new Text_js_1["default"]();
        this.shapes.push(text);
        return text;
    };
    Elements.prototype.addTriangle = function () {
        var triangle = new Triangle_js_1["default"]();
        this.shapes.push(triangle);
        return triangle;
    };
    Elements.prototype.addSimpleRectangle = function () {
        var simpleRectangle = new SimpleRectangle();
        this.shapes.push(simpleRectangle);
        return simpleRectangle;
    };
    return Elements;
}());
exports["default"] = Elements;
