require(
    [
        'factory/init',
        'pubsub/init',
        'strategy/init',
        'observer/init'
    ],
    function (factory, pubsub, strategy, observer) {
        'use strict';
        var examples = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            observer: observer
        };

        window.runExamle = function (example) {
            examples[ example ].init();
        };
    }
);
