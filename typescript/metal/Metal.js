"use strict";
exports.__esModule = true;
var Metal = /** @class */ (function () {
    // ctx:Object;
    // canvas:object;
    // drawRectangle:object;
    function Metal() {
        this.load();
    }
    //....................
    Metal.prototype.load = function (canvasName) {
        if (canvasName === void 0) { canvasName = "bilzaaCanvas"; }
        try {
            this.canvas = document.getElementById(canvasName);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;
        }
        catch (err) {
            return false;
        }
    };
    //....................
    Metal.prototype.clear = function () {
        this.ctx.fillStyle = "#f5ecc3";
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }; //fn
    Metal.prototype.clearCanvas = function (fillStyle) {
        if (fillStyle === void 0) { fillStyle = "#e9f7f2"; }
        this.ctx.fillStyle = fillStyle;
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }; //fn  
    Metal.prototype.drawRectangleBorder = function (attributes) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.globalAlpha = attributes.getProperty("opacity");
        this.ctx.lineWidth = attributes.getProperty("borderWidth");
        this.ctx.lineJoin = "round"; //attributes.getProperty("borderWidth");
        this.ctx.strokeStyle = attributes.getProperty("borderColor");
        if (attributes.getProperty("dashedBorder") === true) {
            this.ctx.setLineDash([
                attributes.getProperty("dashSize"),
                attributes.getProperty("gapBetweenDashes")
            ]);
        }
        this.ctx.rect((attributes.getProperty("x") - (attributes.getProperty("borderWidth") / 2)), attributes.getProperty("y") - (attributes.getProperty("borderWidth") / 2), attributes.getProperty("width") + (attributes.getProperty("borderWidth")), attributes.getProperty("height") + (attributes.getProperty("borderWidth")));
        this.ctx.stroke();
        this.ctx.restore();
    };
    Metal.prototype.saveCtx = function () {
        this.ctx.save();
    };
    Metal.prototype.restoreCtx = function () {
        this.ctx.restore();
    };
    Metal.prototype.drawRectangle = function (attributes) {
        this.ctx.save();
        this.ctx.globalAlpha = attributes.getProperty("opacity");
        this.ctx.fillRect(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width"), attributes.getProperty("height"));
        this.ctx.restore();
    };
    Metal.prototype.drawCircle = function (attributes) {
        this.ctx.beginPath();
        this.ctx.arc(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("radius"), 0, 2 * Math.PI);
        this.ctx.stroke();
    };
    Metal.prototype.drawTriangle = function (attributes) {
        this.ctx.save();
        this.ctx.fillStyle = attributes.getProperty("backgroundColor");
        this.ctx.beginPath();
        this.ctx.moveTo(attributes.getProperty("x"), attributes.getProperty("y") + attributes.getProperty("height"));
        this.ctx.lineTo(attributes.getProperty("x") + attributes.getProperty("width"), attributes.getProperty("y") + attributes.getProperty("height"));
        this.ctx.lineTo(attributes.getProperty("x") + attributes.getProperty("width") / 2, attributes.getProperty("y"));
        this.ctx.fill();
        this.ctx.restore();
    };
    Metal.prototype.drawRectangleTitle = function (attributes) {
        this.ctx.save();
        this.ctx.globalAlpha = attributes.getProperty("titleOpacity");
        //this.ctx.globalAlpha = 0.5;
        this.ctx.fillStyle = attributes.getProperty("titleColor");
        this.ctx.font = attributes.getProperty("titleFontSize") + "px " + attributes.getProperty("titleFontFamily");
        var titleHeight = this.ctx.measureText('M').width;
        var titleWidth = this.ctx.measureText(attributes.getProperty("title")).width;
        var titleX = (attributes.getProperty("x") + (attributes.getProperty("width") / 2)) - (titleWidth / 2);
        var titleY = (attributes.getProperty("y") + (attributes.getProperty("height") / 2)) + (titleHeight / 2);
        this.ctx.fillText(attributes.getProperty("title"), titleX, titleY);
        this.ctx.restore();
    };
    Metal.prototype.drawText = function (attributes) {
        this.ctx.save();
        this.ctx.fillStyle = attributes.getProperty("backgroundColor");
        this.ctx.font = attributes.getProperty("font");
        this.ctx.fillText(attributes.getProperty("title"), attributes.getProperty("x"), attributes.getProperty("y"));
        this.ctx.restore();
    };
    Metal.prototype.getCtxValues = function (attributes) {
        //fillstyle is for internal use dont show it to users
        this.ctx.fillStyle = attributes.getItem("backgroundColor").value;
        this.ctx.strokeStyle = attributes.getItem("strokeStyle").value;
        this.ctx.shadowColor = attributes.getItem("shadowColor").value;
        this.ctx.shadowBlur = attributes.getItem("shadowBlur").value;
        this.ctx.shadowOffsetX = attributes.getItem("shadowOffsetX").value;
        this.ctx.shadowOffsetY = attributes.getItem("shadowOffsetY").value;
    }; //getAttributes
    Metal.prototype.translateCanvas = function (attributes) {
        this.ctx.translate(attributes.getItem("x").value + (attributes.getItem("width").value / 2), attributes.getItem("y").value + (attributes.getItem("height").value / 2));
    };
    Metal.prototype.unTranslateCanvas = function (attributes) {
        this.ctx.translate(-(attributes.getItem("x").value + (attributes.getItem("width").value / 2)), -(attributes.getItem("y").value + (attributes.getItem("height").value / 2)));
    };
    Metal.prototype.rotateCanvas = function (attributes) {
        this.ctx.rotate((attributes.getItem("rotateAngle").value) * Math.PI / 180);
    };
    Metal.prototype.drawEllipse = function () {
        this.ctx.ellipse(100, 100, 50, 75, 45 * Math.PI / 180, 0, 2 * Math.PI);
    };
    return Metal;
}());
exports["default"] = Metal;
