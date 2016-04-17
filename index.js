"use strict";

var base = ["  ", " .", "..", ". "];
var result = base;

var symbolCount        = 2;
var desiredSymbolCount = 8;

while (symbolCount < desiredSymbolCount) {
    let original         = result;
    let reflected        = result.slice(0).reverse();
    let originalPrepend  = original.map((item) => " " + item);
    let reflectedPrepend = reflected.map((item) => "." + item);

    result = originalPrepend.concat(reflectedPrepend);
    symbolCount ++;
}

console.log(result.join("\n"));