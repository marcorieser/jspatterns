define(function (require) {
    'use strict';

    var Handler = require('cor/handler'),
        emailHandler = require('cor/handlers/email'),
        smsHandler, handleSms;

    handleSms = function (sms) {
        console.log('SMS sent to number', sms.number, 'message:', sms.message);
    };

    smsHandler = new Handler('sms', handleSms, emailHandler);


    return smsHandler;

});
