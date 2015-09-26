define(function (require) {
    'use strict';

    var Handler = require('cor/handler'),
        emailHandler, handleEmail;

    handleEmail = function (email) {
        console.log('Email sent to', email.recipient, 'message:', email.message);
    };

    emailHandler = new Handler('email', handleEmail, null);


    return emailHandler;
});
