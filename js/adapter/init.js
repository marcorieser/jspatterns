define(function (require) {
    'use strict';

    return {
        init: function () {
            //var oldInterface = require('adapter/oldInterface');
            //oldInterface.doSomethingOld();

            var oldInterfaceAdapter = require('adapter/oldInterfaceAdapter');

            oldInterfaceAdapter.doSomethingOld();
        }
    };
});
