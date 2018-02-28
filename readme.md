# Splunk Logger


## To Use:
```
require('splunk-logger');
```

## Call Log Event
```
logEvent(Config, EventObject, callback); 
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
String description of what trigger the event being logged
### eventSev:
Severity level of the event being logged
### errMsg:
Any error message associated with the event being logged
