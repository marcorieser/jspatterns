define(function () {
    'use strict';
    return {
        mixin: function (target) {
            if (!arguments[ 1 ]) {
                return;
            }

            for (var i = 1, len = arguments.length; i < len; i++) {
                var source = arguments[ i ];

                for (var prop in source) {
                    if (!target[ prop ] && source.hasOwnProperty(prop)) {
                        target[ prop ] = source[ prop ];
                    }
                }
            }
        }
    };
});
