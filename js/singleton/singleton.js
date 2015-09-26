define(function () {
    'use strict';

    var Singleton = function () {
    }, instance;

    return {
        init: function () {
            if (!instance) {
                instance = new Singleton();
            }
            return instance;
        }
    };
});
