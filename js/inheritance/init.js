define(function (require) {
    'use strict';

    return {
        init: function () {
            var Beverage = require('inheritance/beverage'),
                Coffee = require('inheritance/coffee'),
                water, coffee;

            water = new Beverage('water', 'cold');
            coffee = new Coffee('hot', 'bold dark roast');

            console.log(water.drink());
            console.log(coffee.drink());
            console.log(coffee.sip());
        }
    };
});
