define(function () {
    'use strict';

    var OldInterface = function () {
    };

    OldInterface.prototype.doSomethingOld = function () {
        console.log('Doing the old thing');
    };

    return new OldInterface();
});
