"use strict";
exports.__esModule = true;
exports.stringCompression = void 0;
exports.stringCompression = function (input) {
    var result = "";
    for (var i = 0; i < input.length; i++) {
        var currentChar = input[i];
        var currentCount = 1;
        while (input[i + 1] === currentChar) {
            currentCount++;
            i++;
        }
        result += currentChar + currentCount;
    }
    return result.length > input.length ? input : result;
};
console.log(exports.stringCompression("aabbb"));
console.log(exports.stringCompression("aabcccccaaa"));
console.log(exports.stringCompression("accurate"));
console.log(exports.stringCompression("a1c2u1r1a1t1e1"));
console.log(exports.stringCompression("escola"));
console.log(exports.stringCompression("accuraaaaaaaaaate"));
