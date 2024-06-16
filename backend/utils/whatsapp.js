const axios = require('axios');
require('dotenv').config();

const sendMessage = async (message, contact) => {
    try {
        const response = await axios.post(
            `https://graph.facebook.com/v19.0/${process.env.PHONE_ID}/messages`,
            {
                messaging_product: 'whatsapp',
                recipient_type: 'individual',
                type: 'text',
                to: contact,
                text: { body: message }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('Message sent:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        throw error;
    }
};


// const absentMessage

module.exports = sendMessage;
