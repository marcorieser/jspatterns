require(
    [
        'factory/init',
        'pubsub/init',
        'strategy/init',
        'observer/init',
        'cor/init',
        'mediator/init',
        'iterator/init',
        'facade/init',
        'decorator/init',
        'adapter/init',
        'composite/init',
        'proxy/init',
        'inheritance/init',
        'mixin/init',
        'singleton/init'
    ],
    function (factory, pubsub, strategy, observer, cor, mediator, iterator, facade, decorator, adapter, composite, proxy, inheritance, mixin, singleton) {
        'use strict';
        var examples = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            observer: observer,
            cor: cor,
            mediator: mediator,
            iterator: iterator,
            facade: facade,
            decorator: decorator,
            adapter: adapter,
            composite: composite,
            proxy: proxy,
            inheritance: inheritance,
            mixin: mixin,
            singleton: singleton
        };

        window.runExamle = function (example) {
            examples[ example ].init();
        };
    }
);
