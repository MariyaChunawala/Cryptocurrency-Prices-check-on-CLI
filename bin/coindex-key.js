const program = require('commander');
const key = require('../commands/key');

program
    .command('set')
    .description('Set an API Key')
    .action(key.set);

program
    .command('Show')
    .description('Show an API Key')
    .action(key.show);

program
    .command('remove')
    .description('Set an API Key')
    .action(key.remove);

program.parse(process.argv);