"use strict";
const leftCurtain = function (element, args = {}) {
    const local = {};
    const left = element.addSimpleRectangle();
    local.fillStyle = ifDefined(args, "fillStyle", "#3c544b");
    ;
    left.attributes.setSingleValue("fillStyle", local.fillStyle);
    local.x = args.fillStyle | 0;
    local.x = ifDefined(args, "x", 0);
    ;
    left.attributes.setSingleValue("x", local.x);
    local.y = ifDefined(args, "y", 0);
    ;
    local.height = ifDefined(args, "height", 600);
    ;
    left.attributes.setSingleValue("height", local.height);
    local.width = ifDefined(args, "width", 0);
    ;
    left.attributes.setSingleValue("width", local.width);
    local.fromSecond = 2;
    local.toSecond = 3;
    local.from = 3;
    local.to = 3;
    left.animationSequences.add({ valueName: "width", algo: "linear", fromSecond: [local.fromSecond], toSecond: [local.toSecond] }, ["width"], { valueName: "width", "from": args.from, "to": args.to });
    return element;
};
//----------------------- 
const ifDefined = function (args, item, alternative) {
    if (args.hasOwnProperty(item)) {
        return args[item];
    }
    else {
        return alternative;
    }
};
exports["default"] = leftCurtain;