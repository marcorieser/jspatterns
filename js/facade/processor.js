define(function () {
    'use strict';

    return {
        processString: function (string) {
            return string.substring(0, string.length / 2);
        },
        processNumber: function (number) {
            return number * number;
        },
        processBoolean: function (boolean) {
            return !boolean;
        },
        processArray: function (array) {
            return array.length;
        },
        processObject: function (obj) {
            return Object.keys(obj).length;
        }
    };
});
