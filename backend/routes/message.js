const express = require('express');
const router = express.Router();
const accountSid = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Function to send SMS
const sendSMS = async (body) => {
    let msgOptions = {
        from: process.env.FROM_PHONE_NUMBER,
        to: process.env.TO_PHONE_NUMBER,
        body,
    };
    try {
        const message = await client.messages.create(msgOptions);
        console.log(message);
        return message;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

// Route to send SMS
router.get('/send-sms', async (req, res) => {
    const { messageBody } = req.body;

    if (!messageBody) {
        return res.status(400).json({ error: 'Message body is required' });
    }

    try {
        const message = await sendSMS(messageBody);
        res.json({ message: 'SMS sent successfully', message });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send SMS' });
    }
});

module.exports = router;

