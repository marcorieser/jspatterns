define(function () {
    'use strict';

    var NewInterface = function () {
    };

    NewInterface.prototype.doSomethingNew = function (newArg) {
        console.log('Doing the', newArg);
    };

    return new NewInterface();
});
