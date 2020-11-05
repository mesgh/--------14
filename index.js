'use strict';

const imp = require('./protochain.js');
let obj = imp.o3;
const result = [];

while (obj.prototype) {
    obj = obj.prototype;
    result.push(obj.name);
}

exports.result = result;
