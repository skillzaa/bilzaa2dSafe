import BasePrimtive from "./BasePrimtive.js";

export default class SimpleRectangle extends BasePrimtive {
  constructor() {
  
    super("simpleRectangle");
  }

  drawShape() {


    this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
    this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
    this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
    this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
    this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
    this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
    if (this.attributes.getProperty("rps") > 0) {
      this.ctx.save();
      this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
      this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
      this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));

    }

    this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);

    if (this.attributes.getProperty("rps") > 0) {
      this.ctx.restore();
    }
    //--the draw function
  }

  drawBorder() {
  }//--draw border   
  //////////////////////////classsss-----------------
}