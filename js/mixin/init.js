define(function (require) {
    'use strict';

    return {
        init: function () {
            var Dog = require('mixin/dog'),
                Person = require('mixin/person'),
                mixer = require('mixin/mixer'),
                abilities = require('mixin/abilities'),
                john, fido;


            mixer.mixin(Dog.prototype, abilities.speakAbilities, abilities.moveAbilities);
            mixer.mixin(Person.prototype, abilities.speakAbilities, abilities.moveAbilities, abilities.arithmeticAbilities);

            fido = new Dog('Fido');
            john = new Person('John');

            console.log(fido.walk());
            console.log(john.multiply());
        }
    };
});
