/**i dont need attributes since now my code is DE_COUPLED it just get the required data and return data */
//const attributes = require("./attributes.js")["default"];
const Linear = require("../testsrc/animations/Linear.js")["default"];


//console.log("Linear",Linear);

// test('start at start =0', () => {
// const x = attributes.getProperty("x");    
//     expect(100).toEqual(100); 
//   });

test('time has passed animation will not run', () => {
const liner = new Linear( {attributeToAnimate: "width",fromSecond:1, toSecond:10},[],{from:0, to:100});
const ret = liner.animate(100,11);
expect(ret).toEqual(100); 
});

test('time has not yet come, animation will not run', () => {
const liner = new Linear( {attributeToAnimate: "width",fromSecond:1, toSecond:10},[],{from:0, to:100});
const ret2 = liner.animate(100,0);
expect(ret2).toEqual(100); 
});


test('Finally the mighty Loop---', () => {
const l = new Linear( {attributeToAnimate: "width",fromSecond:1, toSecond:10},[],{from:100, to:500});
let currentSecond = 1.00
let attributeToAnimateDataLastValue = 100; //start value
do {
  currentSecond+= 0.10;
  let newValue = l.animate(attributeToAnimateDataLastValue,currentSecond);

  expect(newValue).toBeGreaterThanOrEqual(attributeToAnimateDataLastValue); 
  console.log("currentSecond",currentSecond, "newValue", newValue,"attributeToAnimateDataLastValue",attributeToAnimateDataLastValue);
  attributeToAnimateDataLastValue = newValue;
} while (currentSecond <= 10);
});

