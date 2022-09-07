const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = "https://api.nomics.com/v1/currencies/ticker";
    }
    async getPriceData(coin, currency){
        try {
            const formatter = new Intl.NumberFormat('en-US', {
                style : "currency",
                currency : currency
            })
            const response = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coin}&convert=${currency}`);
            let output = "";
            response.data.forEach((coin) => {
                output += `Coin : ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`;
            });
            return output;
        } catch (err) {
            handleAPIError(err);
        }
    }
}

function handleAPIError(err){
    if(err.response.status === 401){
        throw new Error("Invalid API key!!!");
    } else if(err.response.status === 404){
        throw new Error("API key is not responding!!!");
    }else{
        throw new Error("Something is not working!!!");
    }
}

module.exports = CryptoAPI;