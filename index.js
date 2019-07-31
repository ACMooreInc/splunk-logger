var path = require('path'),
    request = require('request'),
    config;

exports.init = function (cfg) {
    config = cfg;
}

exports.log = logEvent;

function logEvent(eventObj, cbMain) {
    var event = {
        "source": eventObj.source,
        "event": {
            "message": eventObj.eventMsg,
            "severity": eventObj.eventSev,
            "stack-trace": eventObj.errMsg
        }
        if (eventObj.eventData) event["event"]["event-data"] = eventObj.eventData;
    };
    if (!config.splunkUrl || !config.splunkToken) {
        event['logError'] = 'Splunk has not been configured, unable to log'
        console.error(event);
        return cbMain(null);
    }    
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
