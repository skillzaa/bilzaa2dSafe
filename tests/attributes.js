const ArrayOfObjects = require("../testsrc/single/ArrayOfObjects.js")["default"];


const attributes = new ArrayOfObjects();

//--The name--
//--x,y,width,height--
attributes.add({ name: "x", value: 100 });
/*
attributes.add({ name: "name", value: 0 });
attributes.add({ name: "y", value: 100 });
attributes.add({ name: "width", value: 100 });
attributes.add({ name: "height", value: 50 });
//--Border--
attributes.add({ name: "drawBorder", value: false });
attributes.add({ name: "dashedBorder", value: false });
//drawborder and transparent both CANT be both false and true at same time
attributes.add({ name: "transparent", value: false });
attributes.add({ name: "dashSize", value: 5 });
attributes.add({ name: "gapBetweenDashes", value: 1 });
attributes.add({ name: "borderColor", value: "black" });
attributes.add({ name: "borderWidth", value: 1 });
//--rotation--
attributes.add({ name: "rotateClockwise", value: true, comments: "t/f" });
//---the angle at which);the obj is currently rotated
attributes.add({ name: "rotateAngle", value: 0 });
attributes.add({ name: "rps", value: 10, comments: "rotation persec, 6 = 360 in min. 0 = no rotate, this is rotation speed not current rotation angle" });
//--colors--
attributes.add({ name: "backgroundColor", value: "green" });
attributes.add({ name: "opacity", value: 1 });
attributes.add({ name: "strokeStyle", value: "#F0000" });
//--shadows--
attributes.add({ name: "shadowColor", value: "grey" });
attributes.add({ name: "shadowBlur", value: 10 });
attributes.add({ name: "shadowOffsetX", value: 50 });
attributes.add({ name: "shadowOffsetY", value: 50 });
//----title
attributes.add({ name: "title", value: "The Title" });
attributes.add({ name: "titleColor", value: "red" });
attributes.add({ name: "titleFontSize", value: 22 });
attributes.add({ name: "titleFontFamily", value: "Arial" });
attributes.add({ name: "titleOpacity", value: 1 });

//module.exports = attributes;

exports["default"] = attributes;
*/