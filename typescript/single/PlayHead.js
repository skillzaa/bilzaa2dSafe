"use strict";
/**The app can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running the time is calculated by the difference between time now ans start time. on the other hand during pause the time is placed in side oldTime and can be managed from there. when resumend this old time is subtracted from the startTime (this oldTime is the time which the animation has run before resume to we need to add that).
 * similarly for forward and rewind also we have to treat both states seperately.
*/
exports.__esModule = true;
var PlayHead = /** @class */ (function () {
    function PlayHead() {
        this.duration = 100000;
        this.oldTime = 0;
        this.paused = true;
        this.startTime = 0;
    }
    PlayHead.prototype.runningTime = function () {
        if (this.paused === false) {
            var t = (Date.now() - this.startTime);
            return Number((t / 1000).toFixed(2));
        }
        else {
            return this.oldTime / 1000;
        }
    };
    PlayHead.prototype.play = function () {
        if (this.paused === true) { //cant be repeated w/o stop
            this.startTime = (Date.now() - this.oldTime);
            this.oldTime = 0;
            this.paused = false;
        }
    };
    PlayHead.prototype.pause = function () {
        if (this.paused === false) { // so playinh now will pause
            this.oldTime = Date.now() - this.startTime; //store time
            this.startTime = 0;
            this.paused = true;
        }
    };
    PlayHead.prototype.stop = function () {
        this.oldTime = 0; //since its start so old time is gone
        this.startTime = 0;
        this.paused = true;
    };
    PlayHead.prototype.resume = function () {
        this.play();
    };
    PlayHead.prototype.forward = function (ms) {
        if (ms === void 0) { ms = 5000; }
        var oldPause = false;
        if (this.paused === true) {
            oldPause = true;
        }
        this.pause();
        if (this.oldTime + ms < this.duration) {
            this.oldTime = this.oldTime + ms;
        }
        if (oldPause == false) {
            this.play();
        }
    };
    PlayHead.prototype.rewind = function (ms) {
        if (ms === void 0) { ms = 5000; }
        var oldPause = false;
        if (this.paused === true) {
            oldPause = true;
        }
        this.pause();
        if (this.oldTime - ms > 0) {
            this.oldTime = this.oldTime - ms;
        }
        if (oldPause == false) {
            this.play();
        }
    };
    return PlayHead;
}());
exports["default"] = PlayHead;
