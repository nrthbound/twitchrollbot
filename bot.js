const TwitchBot = require('node-twitchbot');
require('dotenv').config();

const Bot = new TwitchBot({
  username : 'nomo_tv',
  oauth    : process.env.TWITCH_OAUTH,
  channel  : 'brinkco'
})

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

/* Connect bot to Twitch IRC */
Bot.connect()
.then(() => {

  /* Listen for all messages in channel */
  // Bot.listen((err, chatter) => {
  //   if(err) {
  //     console.log(err)
  //   } else {
  //     console.log(chatter.msg) // 'Hello World!'
  //   }
  // })

  /* Listen for an exact messages match */
  Bot.listenFor('!roll', (err, chatter) => {
    let roll = getRandomInt(101);
    Bot.msg(`${chatter.user} rolled a ${roll}`)
  });

  Bot.listenFor('!discord', (err, chatter) => {
    Bot.msg('Come chill with us on Discord! https://discord.gg/RSEUw6u');
  });

  /* Send a message in the channel */
  // Bot.msg('this is the message text PogChamp')

  /* Listen for raw IRC events */
  // Bot.raw((err, event) => {
  //   console.log(event)
  // })
})
.catch(err => {
  console.log('Connection error!')
  console.log(err)
})
