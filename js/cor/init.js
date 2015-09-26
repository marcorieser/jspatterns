define(function (require) {
    'use strict';

    return {
        init: function () {
            var call, sms, email, telepathy, handler,
                Handler = require('cor/handler'),
                callHandler = require('cor/handlers/call');

            call = {
                type: 'call',
                number: '079 231 33 43',
                ownNumber: '078 451 84 50'
            };

            sms = {
                type: 'sms',
                number: '079 231 33 43',
                message: 'Hi John'
            };

            email = {
                type: 'email',
                recipient: 'john.doe@exaple.com',
                message: 'Hi John'
            };

            telepathy = {
                type: 'telepathy',
                target: 'someone other',
                message: 'spooky'
            };

            handler = new Handler(null, null, callHandler);

            handler.handleCommunication(email);
            handler.handleCommunication(sms);
            handler.handleCommunication(call);
            handler.handleCommunication(telepathy);
        }
    };
});
