# Temperature Conversion Lambda Function

## Description
This project is an example of how to use AWS Lambda function and GitHub Actions to deploy changes to the Lambda function. The Lambda function is a simple temperature converter that can convert Celsius to Fahrenheit and vice versa.

## Usage: 
To use this Lambda function, simply make an HTTP GET request to the following endpoint:

Celsius to Fahrenheit
https://mk8cq1v7bd.execute-api.us-east-1.amazonaws.com/dev/temperature?c=100

Fahrenheit to Celsius
https://mk8cq1v7bd.execute-api.us-east-1.amazonaws.com/dev/temperature?f=100

replace temperature value you wish to convert.
## Features
Simple temperature converter using AWS Lambda function
Automatic deployment to AWS Lambda with GitHub Actions
Technologies used
AWS Lambda function
GitHub Actions
Node.js

## Getting started
Clone the repository to your local machine.
Install Node.js if not already installed.
Run npm install to install all dependencies.
Open the handler.js file and customize the temperature conversion function to your needs.
Add your AWS credentials to GitHub Secrets.
Push changes to the main branch, and the GitHub Actions workflow will automatically deploy the changes to the AWS Lambda function.
## Deployment
Changes to the lambda_function.js file pushed to the main branch will automatically trigger a deployment to AWS Lambda using GitHub Actions.
## Resources
AWS Lambda Developer Guide
GitHub Actions Documentation


