# Splunk Logger


## To Use:
```
require('splunk-logger');

splunkLogger.init(config);
splunkLogger.log(eventObject);
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
