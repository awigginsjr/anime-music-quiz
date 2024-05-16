// API for facts 
// {{!-- API Token NzE5MDM0ODI5MDkzNjAxMzUy.MTcxNTczMDQ5Ng--.0e8a1deef4 --}}

// {{!-- NzE5MDM0ODI5MDkzNjAxMzUy.MTcxNTczMDU5Mg--.fada2b62c98f --}}

// Authorization: NzE5MDM0ODI5MDkzNjAxMzUy.MTcxNTczMDU5Mg--.fada2b62c98f

// import axios from "axios"; 
const axios = require('axios');

// Function to fetch random facts from the API
async function fetchRandomFacts() {
  try {
    const response = await axios.get('https://waifu.it/api/v4/facts', { 
      headers: { 
        Authorization: 'NzE5MDM0ODI5MDkzNjAxMzUy.MTcxNTczMDU5Mg--.fada2b62c98f' 
      } 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching random facts:', error.message);
    throw new Error('Error fetching random facts');
  }
}

// Function to fetch random quotes from the API
async function fetchRandomQuotes() {
  try {
    const response = await axios.get('https://waifu.it/api/v4/quotes', { 
      headers: { 
        Authorization: 'NzE5MDM0ODI5MDkzNjAxMzUy.MTcxNTczMDU5Mg--.fada2b62c98f' 
      } 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching random quotes:', error.message);
    throw new Error('Error fetching random quotes');
  }
}

module.exports = { fetchRandomFacts };
