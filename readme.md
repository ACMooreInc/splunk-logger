# Splunk Logger

An easy to use splunk logging utility.

Created and maintained by the A.C. Moore software engineering team.  

## To Use:
```
var splunkLogger = require('@ac-moore-inc/splunk-logger');

splunkLogger.init(config);
splunkLogger.log(eventObject, callback);
```

## Config Object Syntax
```
{
  splunkUrl: 'http://urlToSplunk',
  splunkToken: 'splunk-token',
}
```

## EventObject Syntax
```
{
  source: string,
  eventMsg: string,
  eventSev: string,
  errMsg: string
}
```
### source:
The source the event is being logged from 
### eventMsg:
String description of what triggered the event being logged
### eventSev:
Severity level of the event being logged
### errMsg:
Any error message associated with the event being logged
