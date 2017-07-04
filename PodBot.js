const Discord = require('discord.js');
const client = new Discord.Client();
const createEmbed = require("embed-creator");
const config = require("./config.json");

BlockReward=1748.00;
Fee=0.01;
//on Ready\set Game
client.on("ready", () => {
  console.log('Connected to Discord');
  console.log(`${client.user.id} is ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setGame("v2.1");
  console.log('Game Has been set');
});
//Welcome bot
const data1 = {
  "embed": {
    "title": "PoolofD32th.club",
    "description": "Reward Recipient: [BURST-E925-FACX-C2X8-49772](http://burstcoin.biz/address/2311656582822632451)\n First brought online: [04/12/17](https://poolofd32th.club)\n Payout: [300 Mined coin OR 24 hrs](https://beta.poolofd32th.club/pools/MainPayoutFAQ.html)\n Rewards: [60/40 (standard)](https://beta.poolofd32th.club/pools/MainPayoutFAQ.html)\n Block History: [50 (standard)](https://beta.poolofd32th.club/pools/MainPayoutFAQ.html)\n Recommended plot size: [5TB+](https://beta.poolofd32th.club/pools/MainPayoutFAQ.html)\n Highest deadline accepted: [14 days (1209600)](https://beta.poolofd32th.club/pools/MainPayoutFAQ.html) \n",
    "url": "https://poolofd32th.club",
    "color": 7976557,
    "author": {
      "name": "Mother Pool Info",
      "url": "https://poolofd32th.club",
      "icon_url": "https://forums.burst-team.us/assets/uploads/profile/3216-profileimg.png"
    }
  }
};
const data2 = {
  "embed": {
    "title": "ALL.PoolofD32th.club",
    "description": "Reward Recipient: [BURST-LBQ2-XLPT-S2S8-64ZG5](http://burstcoin.biz/address/4736628939229308608)\n First brought online: [06/11/17](https://all.poolofd32th.club)\n Fee: [1% (18.4 Burst/Blockfind)](https://all.poolofd32th.club/js/test.html)\n Payout: [200 Mined coin OR 48 hrs](https://all.poolofd32th.club/js/test.html)\n Rewards: [20/80](http://all.poolofd32th.club/js/test.html)\n Block History: [500](http://all.poolofd32th.club/js/test.html)\n Recommended plot size: [300GB+](http://all.poolofd32th.club/js/test.html)\n Highest deadline accepted: [365 days (31536000)](http://all.poolofd32th.club/js/test.html)\n",
    "url": "https://all.poolofd32th.club",
    "color": 7976557,
    "author": {
      "name": "Daughter Pool Info",
      "url": "https://all.poolofd32th.club",
      "icon_url": "https://forums.burst-team.us/assets/uploads/profile/3216-profileimg.png"
    }
  }
};
const data3 = {
  "embed": {
    "title": "Command: !faucet <address>",
    "description": "Cooldown: 84 hours (0.5 weeks)\n",
    "color": 7976557,
    "author": {
      "name": "Faucet",
      "icon_url": "https://forums.burst-team.us/assets/uploads/profile/3216-profileimg.png"
    }
  }
};
const data4 = {
  "embed": {
    "description": "Pool server is owned by: Gregory Gleason [@PingOfD32th#4641](https://forums.burst-team.us/user/pingofd3ath)\nBrains of the server is: God [@manfromafar#2786](https://forums.burst-team.us/user/manfromafar) \n",
    "url": "https://poolofd32th.club",
    "color": 7976557,
    "author": {
      "name": "Owner Info",
      "url": "https://poolofd32th.club",
      "icon_url": "https://forums.burst-team.us/assets/uploads/profile/3216-profileimg.png"
    }
  }
};


//info
client.on("message", (message) => {
if (!message.content.startsWith(config.prefix)) return;

  if (message.content === config.prefix + 'test') {
    message.channel.send(data1);
    message.channel.send(data2);
    //message.channel.send(data3);
    message.channel.send(data4);
    console.log('Info Requested.');
  }else {
    if (message.content === config.prefix + 'daughter') {
      message.channel.send(data2);
    }else {
      if (message.content === config.prefix + 'main') {
        message.channel.send(data1);
    }else {
      if (message.content === config.prefix + 'mother') {
        message.channel.send(data1);
    }else {
      if (message.content === config.prefix + 'fee') {
        message.channel.send('current fee is ' + BlockReward*Fee + ' burst/blockfind');
      }
    }
  }
}
}
});
//eval
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});


client.login(config.token);
//make pm2 watch wrapper scrips.