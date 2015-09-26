define(function (require) {
    'use strict';

    var Beverage = require('inheritance/beverage');

    var Coffee = function (temperature, type) {
        Beverage.call(this, 'coffee', temperature);

        this.type = type;
    };

    Coffee.prototype = Object.create(Beverage.prototype);

    Coffee.prototype.sip = function () {
        console.log('I\'m sipping some awesome ' + this.temparature + ' ' + ' ' + this.type + ' ' + this.name);
    };

    return Coffee;
});
