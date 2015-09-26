define(function () {
    'use strict';

    var Beverage = function (name, temperature) {
        this.name = name;
        this.temparature = temperature;
    };

    Beverage.prototype.drink = function () {
        console.log('I\'m dringing some ' + this.temparature + ' ' + this.name);
    };

    return Beverage;
});
