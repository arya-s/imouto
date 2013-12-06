var config = {
  botname: process.env.BOTNAME || 'imouto2',
  server: process.env.IRCSERVER || 'irc.quakenet.org',
  channels: ((process.env.DEBUG || false) == true) ? '#NKB' : (process.env.CHANNELS || '#NKB').split(';')
};
var irc = require('irc');
var bot = new irc.Client(
  config.server,
  config.botname, {
    channels: config.channels,
    debug: true,
    floodProtection: true,
    floodProtectionDelay: 1000
  }
);

//TODO TRACKER
var https = require('https');

bot.addListener('message', function(nick, to, text, message) {
  if(text === "hi imouto"){
    bot.say(to, "Hi "+nick+".");
  }
});