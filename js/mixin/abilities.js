define(function () {
    'use strict';

    return {
        speakAbilities: {
            speak: function () {
                return this.name + ' is speaking.';
            }
        },
        moveAbilities: {
            walk: function () {
                return this.name + ' is walking.';
            },
            run: function () {
                return this.name + ' is running.';
            }
        },
        arithmeticAbilities: {
            add: function () {
                return this.name + ' is adding some numbers.';
            },
            multiply: function () {
                return this.name + ' is multiplying some numbers.';
            }
        }
    };
});
