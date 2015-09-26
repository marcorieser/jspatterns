define(function (require) {
        'use strict';

        var slowObject = require('proxy/slowObject'),
            SlowObjectProxy, slowObjectInstance;

        SlowObjectProxy = function () {
            this.someMethod = function () {
                var interval, invokeMethodWhenExists;

                if (!slowObjectInstance) {
                    slowObjectInstance = slowObject.init();


                    invokeMethodWhenExists = function () {
                        if (slowObjectInstance) {
                            console.log('proxying some method');
                            window.clearInterval(interval);
                            slowObjectInstance.someMethod();
                        }
                    };

                    //should use promise instead
                    interval = window.setInterval(invokeMethodWhenExists, 100);
                } else {
                    slowObjectInstance.someMethod();
                }

            }
        };

        return {
            init: function () {
                return new SlowObjectProxy();
            }
        };
    }
);
