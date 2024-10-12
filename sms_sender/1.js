require("dotenv").config()
const accountSid = process.env.AUTH_ID;
const authToken=process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const sendSMS=async (body) => {
let msgOptions = {
from: process.env.FROM_PHONE_NUMBER,
to: process.env.TO_PHONE_NUMBER,
body,
};
try{

const message= await client.messages.create(msgOptions);

console.log(message);}

catch(err) {

console.log(err);

}
};

sendSMS("Scheme updation alert!");