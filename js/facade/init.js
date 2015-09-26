define(function (require) {
    'use strict';

    return {
        init: function () {
            var facade = require('facade/facade');

            console.log(facade.processThing('test string'));
            console.log(facade.processThing(5));
            console.log(facade.processThing(false));
            console.log(facade.processThing([ 1, 2, 3, 4 ]));
            console.log(facade.processThing({ first: 'first', second: 'second' }));
            console.log(facade.processThing(null));
        }
    };
});
