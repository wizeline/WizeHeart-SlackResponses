# WizeHeart Slack Responses (Node.js Lambda)

WizeHeart allows you to track your Wizeline's Team Health.

## How it works?
1. Once Wizeheath-DirectMessages send the message (a question about how the team member is feeling) to slack. The team member can answer through a button, and here is when WizeHeart-SlackResponses act. 
2. WizeHeart-SlackResponses get the Answer, and sent it to Google Sheets. 
3. The stored information in Google Sheets is used to build a Google Data Studio report.
4. Enjoy!

### Features

- Get the Slack user answer.
- Get motivational message
- Send the answer to Google Sheet.

 
## Get Started

- Clone the repository

```
https://github.com/wizeline/WizeHeart-SlackResponses.git
```

- Install dependencies

```
npm install
```

## Testing

The tests were made with Jest, run:

```
npm test
```


------------


### Aditional Requirement

This development requires some keys from your Slack App, to the make the Slack client connection.

To retrieve the Key go to:
https://api.slack.com/apps/

Update this file: **static.js** in the project root, and update this value:

```
slack: {
  slackToken: '',
  signingSecret: '',
  appToken: ''
},
```

This development requires some keys from Google Cloud Platform and Google Sheets, to get/storage information.

```
GCP + Google Sheets: {
  credentials : {
      private_key: "",
      client_email: "",
    },
  sheetID: ""
},
```
