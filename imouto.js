var config = {
  botname: process.env.BOTNAME || 'imouto2',
  server: process.env.IRCSERVER || 'irc.quakenet.org',
  channels: ((process.env.DEBUG || false) == true) ? '#babodebug' : (process.env.CHANNELS || '#babodebug').split(';')
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
  if (text.indexOf('.todo') !== -1) {
    var options = {
      host: 'api.github.com',
      path: '/search/code?q=new+Point+repo:arya-s/GestureRecognizer',
      headers: {
        accept: 'application/vnd.github.v3.text-match+json'
      }
    };

    https.get(options, function(res) {
      var data = "";
      res.setEncoding('utf8');

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        json = JSON.parse(data); 
        console.log(JSON.stringify(json));
        });
    });
  }
});