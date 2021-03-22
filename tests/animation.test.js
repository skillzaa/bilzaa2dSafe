const BasePrimtive = require("../testsrc/premtives/BasePrimtive.js")["default"];


const a = new BasePrimtive();

a.animations.add({attribute: "x",algo: "linear",fromSecond:1 , toSecond:12},["x"],{attribute: "x","from":0, "to":300 },{fps:60});

test('Testing animation', () => {

});
