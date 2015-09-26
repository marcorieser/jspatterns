define(function (require) {
    'use strict';

    return {
        init: function () {
            var singleton = require('singleton/singleton'),
                obj1, obj2;

            obj1 = singleton.init();
            obj2 = singleton.init();

            console.log('obj1 and obj2 are the same instance:', obj1 === obj2);
        }
    };
});
