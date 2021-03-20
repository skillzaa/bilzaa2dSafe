"use strict";
var Metal = require("../metal/Metal.js")["default"];

var ArrayOfObjects = require("../Aoo/ArrayOfObjects.js")["default"];

var AnimationSequencesAoo = require("../Aoo/AnimationSequencesAoo.js")["default"];

var AttributesAoo = require("../Aoo/AttributesAoo.js")["default"];

exports["default"] = class BasePrimtive extends Metal {
    constructor(name, attribData) {
        super();
        this.name = name;
        //====AOOs=============
        this.animations = new AnimationSequencesAoo();
        this.aoo = new ArrayOfObjects();
        this.attributes = new AttributesAoo();
        attribData.forEach(attr => {
            this.attributes.add(attr);
        });
        //==================================
        this.clearCanvas = false; //first element of the frame has to clean
        this.metal = new Metal();
        //--get attrib data into attribute object
    }
    addAttribure() {
    }
    setNextFrame(currentSecond) {
        if (this.clearCanvas === true) {
            this.metal.clearCanvas();
            this.clearCanvas === false; //shd this be here?
        }
        //==================LLLLLOOOOPPPPP======================== 
        this.animations.data.forEach(animation => {
            //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
            //filter out not relavant seq here
            if ((currentSecond > animation.fromSecond)
                &&
                    (currentSecond <= animation.toSecond)) {
                //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
                const elementDataBeingSentToAnimation = this.attributes.getAttributesByName(animation.dataRequired);
                //----STEP 3 -- Animate the data
                const retData = animation.animate(elementDataBeingSentToAnimation, currentSecond);
                //----STEP 4 -- SAVE ATTRIBUTES
                this.attributes.saveAttributeValues(retData); //retData is aoo
            } /////--filter no relevant animations
            //========================================== 
        });
        return true;
    }
    draw() {
        this.drawShape();
    }
    ////-------------------------------------------
    /**every element atleast has 2 componenets .// a border and the shape. we can keep their implementation chaging and adding HOOKS*/
    drawBorder() {
    }
    drawShape() { }
}