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
var https = require('https');

bot.addListener('message', function(nick, to, text, message) {
  if(text.indexOf('.todo') !== -1){
    var options = {
      host: 'api.github.com',
      path: '/search/code?q=new+Point+repo:arya-s/GestureRecognizer',
      headers: {
        //accept: 'application/vnd.github.v3.text-match+json'
        accept: '*/*'
      }
    };

    https.get(options, function(resp) {
      var data = "";
      resp.setEncoding('utf8');
      
      resp.on('data', function (chunk) {
        data += chunk;
      });

      resp.on('end', function () {
        repos = JSON.parse(data); 
        console.log(repos);
        });
    });

    // https.get(options, function(res){
    //   var output = ''

    //   res.on('data', function(chunk){
    //     output += chunk;
    //   });

    //   res.on('end', function(){
    //     var response;

    //     try{
    //       response = JSON.parse(output);
    //     }
    //     catch(e){
    //       console.log('Invalid request. ',e);
    //     }

    //     if(!response || response.success !== 1){
    //       console.log('Unsuccessful call to api.');
    //     }
    //     else{
    //       console.log(response);
    //     }
    //   });

    //   res.on('error', function(e){
    //     console.log('Error: '+e.message);
    //   });
    // });
  }
});