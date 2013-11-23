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

//TODO TRACKER
var http = require('http');

bot.addListener('message', function(nick, to, text, message) {
  if(text.indexOf('.todo') !== -1){
    var options = 'https://api.github.com/search/code?q=new+Point+repo:arya-s/GestureRecognizer';

    http.get(options, function(red){
      var output = ''

      res.setEncodig('utf-8');

      res.on('data', function(chunk){
        output += chunk;
      });

      res.on('end', function(){
        var response;

        try{
          response = JSON.parse(output).response;
        }
        catch(e){
          console.log('Invalid request. ',e);
        }

        if(!response || response.success !== 1){
          console.log('Unsuccessful call to api.');
        }
        else{
          console.log(response);
        }
      });

      res.on('error', function(e){
        console.log('Error: '+e.message);
      });
    });
  }
});