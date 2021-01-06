"use strict";
exports.__esModule = true;
exports.isOneEdit = void 0;
exports.isOneEdit = function (strA, strB) {
    if (Math.abs(strB.length - strA.length) > 1)
        return false;
    if (strA.length > strB.length)
        return strA.includes(strB);
    if (strB.length > strA.length)
        return strB.includes(strA);
    var diffCharsCount = 0;
    for (var i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i])
            diffCharsCount++;
    }
    return diffCharsCount === 1;
};
console.log(exports.isOneEdit("banan", "banana"));
console.log(exports.isOneEdit("bananak", "banana"));
console.log(exports.isOneEdit("panana", "banana"));
console.log(exports.isOneEdit("bananaaa", "banana"));
