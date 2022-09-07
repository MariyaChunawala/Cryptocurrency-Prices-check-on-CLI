const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific type of coin in CSV format', 'BTC, ETH, XRP')
    .option('--currency <currency>', 'Change the currency', 'USD')
    .action((command) => check.price(command));

program.parse(process.argv);
