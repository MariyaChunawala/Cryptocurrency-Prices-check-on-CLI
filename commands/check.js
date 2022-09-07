const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check ={
    async price(cmd){
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            const cryptoAPI = new CryptoAPI(key);
            console.log(await cryptoAPI.getPriceData(cmd.coin, cmd.currency));
        } catch (err) {
            console.error(err.message.red);
        }
    }
}

module.exports = check;