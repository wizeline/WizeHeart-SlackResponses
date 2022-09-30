const { STATIC } = require("./static");

const { getDevApp, getProdApp, updateMessage, awsLambdaReceiver } = require("./functions/slack");
const { submitAnswer } = require("./functions/googleSheets");


let app = STATIC.app.env === "dev" ? getDevApp() : getProdApp();

app.action(/.*/gm, async ({ ack, body, view, client, logger }) => {
  try {
    await ack();
    //Get Response Value
    const responseVal = body?.actions?.[0]?.value;
    const channelId = body?.container?.channel_id;
    const messageId = body?.container?.message_ts;
    const userId = body?.user?.id;
    
    //Submitting answer - Temporal message
    const message = ":airplane: Your answer is being sent";
    
    await updateMessage(client, channelId, messageId, message);
    const answerMessage = responseVal && await submitAnswer(responseVal);

    console.log(answerMessage);

    await updateMessage(client, channelId, messageId, `Thank you for your answer\n${userId ? `<@${userId}> ` : ''}Remember:\n:heart: _${answerMessage}_ :v:`);
  }
  catch (error) {
    console.error(error);
  }
});

app.error((error) => {
  // Check the details of the error to handle special cases (such as stopping the app or retrying the sending of a message)
  console.error(error);
});


if(STATIC.app.env === "dev"){  
  (async () => {
    // Start your app
    await app.start(process.env.PORT || 3004);  
    console.log('⚡️ Bolt app is running!');  
  })();
} else {
  // Handle the Lambda function event
  module.exports.handler = async (event, context, callback) => {
    const handler = await awsLambdaReceiver.start();
    return handler(event, context, callback);
  }
}
