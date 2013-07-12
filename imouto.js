var config = {
  botname: process.env.BOTNAME || 'imouto2',
  server: process.env.IRCSERVER || 'irc.quakenet.org',
  channels: ((process.env.DEBUG || false) == true) ? '#babodebug' : (process.env.CHANNELS || '#babodebug').split(';')
};
var irc = require('irc');
var bot = new irc.Client(
  config.server,
  config.botname,
  {
    channels: config.channels,
    debug: true,
    floodProtection: true,
    floodProtectionDelay: 1000
  }
);

bot.addListener('message', function(nick, to, text, message) {
  if(text.indexOf('hi imouto') !== -1){
    bot.say(to, 'hi2u2');
  }
});