define(function (require) {
    'use strict';

    var Handler = require('cor/handler'),
        smsHandler = require('cor/handlers/sms'),
        callHandler, handleCall;

    handleCall = function (call) {
        console.log('Call placed to number', call.number, 'from number:', call.ownNumber);
    };

    callHandler = new Handler('call', handleCall, smsHandler);

    return callHandler;
});
