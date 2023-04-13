# COMP306-AkhilSinghRana-Lab4

#Temperature Conversion Lambda Function

This is a Lambda function built in AWS that converts temperatures between Celsius and Fahrenheit. It exposes an API endpoint that accepts a temperature value and a temperature unit (either Celsius or Fahrenheit), and returns the converted temperature in the other unit.

Usage
To use this Lambda function, simply make an HTTP GET request to the following endpoint:

Celsius to Fahrenheit
https://mk8cq1v7bd.execute-api.us-east-1.amazonaws.com/dev/temperature?c=100

Fahrenheit to Celsius
https://mk8cq1v7bd.execute-api.us-east-1.amazonaws.com/dev/temperature?f=100

replace temperature value you wish to convert.
