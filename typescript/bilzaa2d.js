"use strict";
exports.__esModule = true;
var PlayHead_js_1 = require("./single/PlayHead.js");
var Elements_js_1 = require("./fasades/Elements.js");
var Animations_js_1 = require("./fasades/Animations.js");
var Primtives_js_1 = require("./fasades/Primtives.js");
var Premades_js_1 = require("./premade/Premades.js");
/**This is from ubuntu......!!! */
var Bilzaa2d = /** @class */ (function () {
    function Bilzaa2d() {
        this.premades = new Premades_js_1["default"]();
        this.playHead = new PlayHead_js_1["default"]();
        this.elements = new Elements_js_1["default"]();
        this.primtives = new Primtives_js_1["default"]();
        this.animations = new Animations_js_1["default"]();
    }
    Bilzaa2d.prototype.play = function () {
        // try{   
        this.playHead.play();
        this.gameLoop();
        //   } catch (err) {
        //       return "some error occured";
        //   } 
    }; //play
    Bilzaa2d.prototype.gameLoop = function () {
        var _this = this;
        if (this.elements.shapes.length < 1) {
            return;
        }
        //first element of the frame being drawn has to clear the canvas    
        this.elements.shapes[0].clearCanvasFlag = true;
        //----------the main loop
        this.elements.shapes.forEach(function (item) {
            var curSec = _this.playHead.runningTime();
            item.setNextFrame(curSec);
            item.draw(curSec);
        });
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }; //play
    return Bilzaa2d;
}()); //class
exports["default"] = Bilzaa2d;
