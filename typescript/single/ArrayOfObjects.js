"use strict";
/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
exports.__esModule = true;
var ArrayOfObjects = /** @class */ (function () {
    function ArrayOfObjects() {
        this.data = [];
    }
    ArrayOfObjects.prototype.add = function (incomming) {
        if (incomming === void 0) { incomming = {}; }
        this.data.push(incomming);
        return incomming;
    };
    // add(name:string){
    // if (this.isUnique(name) === true){
    //     const a = {};
    //     a.name = name; 
    //     this.data.push(a);
    //     return a;    
    // } else {
    //     return {success: false, message : "Please Provide a unique and valid string name for the object", errorMessage: "nonUniqueName" }
    // }   
    // } 
    ArrayOfObjects.prototype.isUnique = function (name) {
        if (typeof name == "undefined") {
            return false;
        }
        var uniqueOrNot = true;
        for (var idx = 0; idx < this.data.length; idx++) {
            var element = this.data[idx];
            if (element.name === name) {
                uniqueOrNot = false;
            }
        }
        return uniqueOrNot;
    };
    Object.defineProperty(ArrayOfObjects.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    ArrayOfObjects.prototype.getItem = function (name) {
        for (var idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx];
            }
        }
        return false;
    }; //.....................
    ArrayOfObjects.prototype.getProperty = function (name, value) {
        if (value === void 0) { value = "value"; }
        for (var idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx][value];
            }
        }
        return false;
    };
    ArrayOfObjects.prototype.setProperty = function (name, value, propertyName) {
        if (propertyName === void 0) { propertyName = "value"; }
        for (var idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                this.data[idx][propertyName] = value;
                return this.data[idx];
            }
        }
        return true;
    }; //......
    ArrayOfObjects.prototype.getAllByNames = function (argumentsRequired) {
        if (argumentsRequired === void 0) { argumentsRequired = []; }
        /**incooming is normal [] where as attributes is an obj wrapped around an aOO */
        var ret = [];
        this.data.forEach(function (bd) {
            argumentsRequired.forEach(function (ag) {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    };
    ArrayOfObjects.prototype.insertPropertiesFromArray = function (retData) {
        this.data.forEach(function (bd) {
            retData.forEach(function (ag) {
                if (ag.name == bd.name) {
                    bd.value = ag.value;
                }
            });
        });
        return true;
    }; //..
    ArrayOfObjects.prototype.setAllProperties = function (propertyName, newValue) {
    };
    ArrayOfObjects.prototype.getItemsByNames = function (argumentsRequired) {
        if (argumentsRequired === void 0) { argumentsRequired = []; }
        /**incooming is normal []  */
        var ret = [];
        this.data.forEach(function (bd) {
            argumentsRequired.forEach(function (ag) {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    };
    return ArrayOfObjects;
}());
exports["default"] = ArrayOfObjects;
