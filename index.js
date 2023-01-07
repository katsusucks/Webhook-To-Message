
const fetch = require ("node-fetch")



const webhookUrl = 'URL'; //webhook url
const message = 'MESSAGE'; //message
getSend(webhookUrl, message);

console.log('\033[32mCompleted the task');


function getSend(webhookUrl, message) {
  if (!webhookUrl) {
    throw new Error('[Touya:] No Webhook was provided'); //can be changed
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



