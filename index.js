
const fetch = require ("node-fetch")



const webhookUrl = 'https://discord.com/api/webhooks/1061224336658272286/PottsTZm3G1nDe58M6rXp1mXuKzpdMsGXrBUbn0OZ6wPmNd13kfrZ5SkELa2-dJW_pKN';
const message = 'Mickey Mouse, got the whole server laughing';
getSend(webhookUrl, message);

console.log('\033[32mCompleted the task');


function getSend(webhookUrl, message) {
  if (!webhookUrl) {
    throw new Error('[Touya:] No Webhook was provided');
  }
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: message
    })
  });
}



