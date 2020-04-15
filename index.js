"use strict";
exports.__esModule = true;
function percent(a, b) {
    return (a / b) * 100;
}
exports.percent = percent;
function baseLog(a, b) {
    return Math.log(b) / Math.log(a);
}
exports.baseLog = baseLog;
function circleX(radians, radius) {
    return Math.cos(radians) * radius;
}
exports.circleX = circleX;
function circleY(radians, radius) {
    return Math.sin(radians) * radius;
}
exports.circleY = circleY;
function distance(startPoint, endPoint) {
    return Math.hypot(endPoint.x - startPoint.x, endPoint.y - startPoint.y);
}
exports.distance = distance;
//# sourceMappingURL=index.js.map