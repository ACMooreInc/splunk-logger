var path = require('path'),
    request = require('request');

exports.logEvent = logEvent;

function logEvent(config, eventObj, cbMain) {
    var event = {
        "source": eventObj.source,
        "event": {
            "message": eventObj.eventMsg,
            "severity": eventObj.eventSev,
            "stack-trace": eventObj.errMsg
        }
    };
    event = JSON.stringify(event);
    request({
        url: config.splunkUrl,
        method: 'POST',
        form: event,
        headers: {
            "Authorization": "Splunk " + config.splunkToken
        }
    }, function callback(err, httpResponse, body) {
        if (err) {
            console.error(err);
            cbMain(err);
        } else {
            cbMain(null);
        };
    });
}
