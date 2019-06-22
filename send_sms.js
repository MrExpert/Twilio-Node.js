// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hey Rush, John, this is Twilio texting you',
     from: '+1858xxxbbbb',
     to: '+1858xxxdddd'
   })
  .then(message => console.log(message.sid));