
const { App } = require('@slack/bolt');
const { STATIC } = require("../static");
const { AwsLambdaReceiver } = require('@slack/bolt');

//Slack App Connection
const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: STATIC.slack.signingSecret,
});

const getDevApp = () => {
  return new App({
    token: STATIC.slack.slackToken,
    signingSecret: STATIC.slack.signingSecret,
    socketMode: true, // remove this
    appToken: STATIC.slack.appToken // add this
  });
}

const getProdApp = () => {
  return new App({
    token: STATIC.slack.slackToken,
    receiver: awsLambdaReceiver
  });
}

const updateMessage = async(client, channelId, messageId, message) => {
  try {
    // Call the chat.delete method using the WebClient
    await client.chat.update({
      channel: channelId,
      ts: messageId,
      text: message,
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": message,
          }
        }
      ],
    });
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = {
  getDevApp,
  getProdApp,
  updateMessage,
  awsLambdaReceiver
};

