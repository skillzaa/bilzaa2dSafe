import BasePrimtive from "./BasePrimtive.js";
export default class Rectangle extends BasePrimtive {
    constructor() {
        super("rectangle");
    }
    draw() {
        // if(this.attributes.getProperty("drawBorder") === true){
        //   this.drawBorder();
        // }
        //     this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
        //     this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
        //     this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
        //     this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
        //     this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
        //     this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
        //     if (this.attributes.getProperty("rps") > 0) {
        //       this.ctx.save();
        //       this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
        //       this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
        //       this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
        // }
        // this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);   
        // if (this.attributes.getProperty("rps") > 0) {
        //   this.ctx.restore();
        // }
        //--the draw function
    }
    drawBorder() {
        //if(this.attributes.getItemValue("rps") > 0){console.log("totating border");}
        if (this.attributes.getProperty("rps") > 0) {
            // this.ctx.save();
            // this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
            // this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
            // this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
            // this.ctx.restore();
            this.metal.drawRectangleBorder(this.attributes);
        }
        // this.metal.drawRectangleBorder(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value, this.attributes.getItem("borderColor").value, this.attributes.getItem("borderWidth").value);
        // if (this.attributes.getProperty("rps") > 0) {
        //   this.ctx.restore();
        // }
        //----------------------------    
    } //--draw border   
}
