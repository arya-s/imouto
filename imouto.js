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

//generating diff delay each time between 1-10 seconds
function randomResponseTime() {
    var delayInMilliseconds = Math.random();
    delayInMilliseconds = delayInMilliseconds*10000;
    return delayInMilliseconds;
}

bot.addListener('message', function(nick, to, text, message) {
    //actually delaying responses
    var delay = randomResponseTime();
    setTimeout(function() {
        bot.say(to, 'this is a delayed response of ' + delay);
    }, delay);
    if(text.indexOf('hi imouto') !== -1){
        bot.say(to, 'hi2u2');
    }
});
