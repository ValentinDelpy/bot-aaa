const Discord = require('discord.js');
const myBot = new Discord.Client();

myBot.on('message', data => {
    if ((data.content.toLowerCase() === 'enculé')||(data.content.toLowerCase()==='encule')){
        data.channel.send('Flamm, tes cachets');
    }
    else if(data.content.toLowerCase() === 'vitality') {
        data.channel.send(':vitality:');
    }
    else if ((data.content.toLowerCase() === '!LFL') || (data.content === '!lfl')) {
        data.channel.send("la LFL, c'est le mardi et mercredi soir les amis.");
    }
    else if (data.content.toLowerCase() === '!media') {
        data.channel.send("c'est la faute des juifs.");
    }
    else if (data.content.toLowerCase() === "!waulk") {
        data.channel.send("Ton kaméhaméha, quelle main en haut ?");
    }
    else if (data.content.toLowerCase() === "!hellraiser") {
        data.channel.send("les gars j'ai trop bu hier soir");
    }
    else if (data.content.toLowerCase() === "!togi") {
        data.channel.send("niquez vous");
    }
    else if (data.content.toLowerCase() === "!flamm") {
        data.channel.send("Est-ce que tu ne serais pas d'une autre galaxie ?");
    }
    else if (data.content.toLowerCase() === "!zidwait") {
        data.channel.send("Envoyez moi l'macdo");
    }
    else if (data.content.toLowerCase() === "!cricri") {
        data.channel.send("Jinx c'est vraiment trop bien");
    }
    else if(data.content.toLowerCase() === "!megane"){
        data.channel.send("c'est non.")
    }
});

myBot.login('NTQ2MDI0OTIxMjk4NjMyNzQ3.D0xmXA.RRgwRtg9mTRU-3P6IbjVx4vbuwk');