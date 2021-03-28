"use strict";
exports["default"] = class Metal {
    // ctx:Object;
    // canvas:object;
    // drawRectangle:object;
    constructor() {
        this.load();
    }
    //....................
    load(canvasName = "bilzaaCanvas") {
        try {
            this.canvas = document.getElementById(canvasName);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;
        }
        catch (err) {
            return false;
        }
    }
    //....................
    clear() {
        this.ctx.fillStyle = "#f5ecc3";
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } //fn
    clearCanvas(fillStyle = "#e9f7f2") {
        this.ctx.fillStyle = fillStyle;
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } //fn  
    drawRectangleBorder(attributes) {
        this.ctx.save();
        this.ctx.beginPath();
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
    }
    saveCtx() {
        this.ctx.save();
    }
    restoreCtx() {
        this.ctx.restore();
    }
    drawRectangle(attributes) {
        this.ctx.save();
        this.ctx.globalAlpha = attributes.getProperty("opacity");
        this.ctx.fillRect(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("width"), attributes.getProperty("height"));
        this.ctx.restore();
    }
    drawCircle(attributes) {
        this.ctx.beginPath();
        this.ctx.arc(attributes.getProperty("x"), attributes.getProperty("y"), attributes.getProperty("radius"), 0, 2 * Math.PI);
        this.ctx.stroke();
    }
    drawTriangle(attributes) {
        this.ctx.save();
        this.ctx.fillStyle = attributes.getProperty("backgroundColor");
        this.ctx.beginPath();
        this.ctx.moveTo(attributes.getProperty("x"), attributes.getProperty("y") + attributes.getProperty("height"));
        this.ctx.lineTo(attributes.getProperty("x") + attributes.getProperty("width"), attributes.getProperty("y") + attributes.getProperty("height"));
        this.ctx.lineTo(attributes.getProperty("x") + attributes.getProperty("width") / 2, attributes.getProperty("y"));
        this.ctx.fill();
        this.ctx.restore();
    }
    drawRectangleTitle(attributes) {
        this.ctx.save();
        this.ctx.globalAlpha = attributes.getProperty("titleOpacity");
        //this.ctx.globalAlpha = 0.5;
        this.ctx.fillStyle = attributes.getProperty("titleColor");
        this.ctx.font = `${attributes.getProperty("titleFontSize")}px ${attributes.getProperty("titleFontFamily")}`;
        const titleHeight = this.ctx.measureText('M').width;
        const titleWidth = this.ctx.measureText(attributes.getProperty("title")).width;
        const titleX = (attributes.getProperty("x") + (attributes.getProperty("width") / 2)) - (titleWidth / 2);
        const titleY = (attributes.getProperty("y") + (attributes.getProperty("height") / 2)) + (titleHeight / 2);
        this.ctx.fillText(attributes.getProperty("title"), titleX, titleY);
        this.ctx.restore();
    }
    drawText(attributes) {
        this.ctx.save();
        this.ctx.fillStyle = attributes.getProperty("backgroundColor");
        this.ctx.font = attributes.getProperty("font");
        this.ctx.fillText(attributes.getProperty("title"), attributes.getProperty("x"), attributes.getProperty("y"));
        this.ctx.restore();
    }
    getCtxValues(attributes) {
        //fillstyle is for internal use dont show it to users
        this.ctx.fillStyle = attributes.getItem("backgroundColor").value;
        this.ctx.strokeStyle = attributes.getItem("strokeStyle").value;
        this.ctx.shadowColor = attributes.getItem("shadowColor").value;
        this.ctx.shadowBlur = attributes.getItem("shadowBlur").value;
        this.ctx.shadowOffsetX = attributes.getItem("shadowOffsetX").value;
        this.ctx.shadowOffsetY = attributes.getItem("shadowOffsetY").value;
    } //getAttributes
    translateCanvas(attributes) {
        this.ctx.translate(attributes.getItem("x").value + (attributes.getItem("width").value / 2), attributes.getItem("y").value + (attributes.getItem("height").value / 2));
    }
    unTranslateCanvas(attributes) {
        this.ctx.translate(-(attributes.getItem("x").value + (attributes.getItem("width").value / 2)), -(attributes.getItem("y").value + (attributes.getItem("height").value / 2)));
    }
    rotateCanvas(attributes) {
        this.ctx.rotate((attributes.getItem("rotateAngle").value) * Math.PI / 180);
    }
}