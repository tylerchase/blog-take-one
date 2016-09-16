var client = require('twilio')('ACe35d9f0f64af02ce75b06b047f062366', '6a2361319c6644e299eb6d5c40793e9a');
module.exports = {
sendText: function(){

console.log('test');
 // client.sendMessage({
    to:'+15206645798', // Any number Twilio can deliver to
    from: '+15052070206 ', // A number you bought from Twilio and can use for outbound communication
    body: 'word to your mother.' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio
  console.log(err);
    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1


        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

      }});
  }
}
