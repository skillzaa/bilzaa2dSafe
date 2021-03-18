import BasePrimtive from "./BasePrimtive.js";
export default class Rectangle extends BasePrimtive {
    constructor() {
        const attribData = [
            { name: "x", value: 100, comments: "The X location" },
            { name: "y", value: 100, comments: "The Y location" },
            { name: "width", value: 100, comments: "" },
            { name: "drawBorder", value: true, comments: "" },
            { name: "borderColor", value: "red", comments: "" },
            { name: "borderWidth", value: 10, comments: "" },
            { name: "height", value: 50, comments: "" },
            { name: "rotateClockwise", value: true, comments: "t/f" },
            { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
            { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
            { name: "fillStyle", value: "green", comments: "" },
            { name: "strokeStyle", value: "#F0000", comments: "" },
            { name: "shadowColor", value: "blue", comments: "" },
            { name: "shadowBlur", value: 0, comments: "" },
            { name: "shadowOffsetX", value: 0, comments: "" },
            { name: "shadowOffsetY", value: 0, comments: "" },
        ];
        const name = "Rectangle";
        super(name, attribData);
    }
    drawShape() {
        if (this.attributes.getItemValue("drawBorder") === true) {
            this.drawBorder();
        }
        this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
        this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
        this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
        this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
        this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
        this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
        if (this.attributes.getItemValue("rps") > 0) {
            this.ctx.save();
            this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
            this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
            this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
        }
        this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);
        if (this.attributes.getItemValue("rps") > 0) {
            this.ctx.restore();
        }
        //--the draw function
    }
    drawBorder() {
        //if(this.attributes.getItemValue("rps") > 0){console.log("totating border");}
        if (this.attributes.getItemValue("rps") > 0) {
            this.ctx.save();
            this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
            this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
            this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
        }
        this.drawRectangleBorder(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value, this.attributes.getItem("borderColor").value, this.attributes.getItem("borderWidth").value);
        if (this.attributes.getItemValue("rps") > 0) {
            this.ctx.restore();
        }
        //----------------------------    
    } //--draw border   
}
