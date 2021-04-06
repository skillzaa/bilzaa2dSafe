"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BasePrimtive_js_1 = require("./BasePrimtive.js");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super.call(this, "rectangle") || this;
    }
    Rectangle.prototype.draw = function () {
        //this.metal.drawRectangle(this.attributes);       
        //--------------------------------------------
        this.metal.saveCtx();
        this.metal.getCtxValues(this.attributes);
        if (this.attributes.getProperty("rps") > 0) {
            this.metal.translateCanvas(this.attributes);
            this.metal.rotateCanvas(this.attributes);
            this.metal.unTranslateCanvas(this.attributes);
        }
        //--------------draw rect
        if ((this.attributes.getProperty("transparent") === false)) {
            this.metal.drawRectangle(this.attributes);
        }
        //--------------draw rect
        if ((this.attributes.getProperty("title") != "")) {
            this.metal.drawRectangleTitle(this.attributes);
        }
        //------------------------------
        this.metal.restoreCtx();
        //--------------------------------------------
    };
    return Rectangle;
}(BasePrimtive_js_1["default"]));
exports["default"] = Rectangle;
