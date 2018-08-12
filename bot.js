const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.login('NDc3MzE1MTQ1MjU3ODQ0NzM4.Dk6WRw.PQ2ixSdnMKwJ0ydofKXsVqCQNC0');

bot.on("ready", async () => {
  console.log(`${bot.user.username} bot ativado!`);

bot.user.setActivity('Brasil Voos', {url: 'https://www.twitch.tv/lucas01ribeiro', type: 'STREAMING'});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}reportar`){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Não foi possivel encontrar o usuario/não colocou um usuario!");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**REPORTS**")
    .setColor("#15f153")
    .addField("Usuario reportado", `${rUser}`)
    .addField("Reportado por", `${message.author}`)
    .addField("Motivo do report", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    message.author.send("**Usuario reportado com sucesso, pedimos desculpa pelo incomodo. Brasil Voos agradece você pela ajuda de remover players atrapalhando nossos voos!!** :relaxed: ")
    if(!reportschannel) return message.channel.send("Você não reportou no canal certo! Use #reports");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }


  if(cmd === `${prefix}limpartodasmensagens`){
    const deleteCount = parseInt(args[0], 2);

    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Por favor insira o número 1");

    //deleta
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Erro ao deletar as mensagens: ${error}`));
  }

  if(cmd === `${prefix}dicas`){
    message.channel.send("**Envie algumas dicas de iniciantes no seu privado!!** :heart:" + `${message.author}`)
    message.author.send("As dicas estarão disponivel em breve! Agradecemos a colaboração!!")
  }

    if(cmd === `${prefix}addons`){
      message.channel.send("**Enviei as addons no seu privado!!**")
      message.author.send("**Download PMDG 737 6789ngx  FSX SE**\nhttp://www.mediafire.com/file/l8fo4l5dl57oik4/pmdg+737+6700+8900+naveg+n.o.x.zip\n\n**Mais de 87 texturas de BOING 787**\nhttps://www.rikoooo.com/downloads/viewdownload/55/783\n\n**Provas e apostilas de estudo para ingresso na aviação :) bons estudos e voos sempre!**\nhttps://drive.google.com/drive/folders/0BzfjF5DtAaKPSnNzSXJ6MWRqR3M?usp=sharing\n\n**Flight Crew Operations Manual (FCOM) 737-600/700/800**\nhttps://drive.google.com/file/d/1yqL1FYQRufxgHI8JaM7oh0uHByLbSzdp/view?usp=sharing\n\n**Para quem quiser, aqui trago para vocês, amigos da Brasilvoos, alguns links de addons freeware muito bons que formam toda familia Airbus**\nhttps://www.rikoooo.com/downloads/viewdownload/6/671\nhttps://www.fs-freeware.net/downloads/download/52-civil-aircraft/2152-fsx-airbus-a310-multi-livery-mega-package.html\nhttps://www.rikoooo.com/downloads/viewdownload/6/674\nhttps://www.rikoooo.com/downloads/viewdownload/6/799")
      message.author.send("https://www.rikoooo.com/downloads/viewdownload/6/686\nhttps://www.rikoooo.com/downloads/viewdownload/6/890\nhttps://www.fs-freeware.net/downloads/download/52-civil-aircraft/2235-fsx-airbus-a380-multi-livery-pack.html\n**lembrando que todos tem Painel 2D e Virtual Cockpit! Abraços**\n\n**Oscar Lima Alfa Cmdtes da Brasilvoos, volto novamente com um pack de aeronaves Freeware que estão inclusos : 737-300, 737-400, 737-500**\nhttps://www.rikoooo.com/pt/downloads/viewdownload/55/852\nhttps://www.justflight.com/product/757-jetliner-freemium\n\n**Olá pessoal estou aki trazendo um addons q tem varias texturas do 737-800 com GWPS e com vozes dos comissarios de bordo**\nhttps://www.rikoooo.com/downloads/viewdownload/55/540");
    }

    if(cmd === `${prefix}ativoGaleão`){
      message.channel.send("Você está ativo na torre de Galeão!!" + `${message.author}`)
    }

    if(cmd === `${prefix}desativaGaleão`){
      message.channel.send("Você está não está mais ativado como ATC em Galeão!" + `${message.author}`)
    }

    let blacklisted = [`fdp`, `pqp`, `filho da puta`, `puta que pariu`, `pnc`, `pau no cu`, `trouxa`, `babaca`, `lixo`, `corno`, `babaca`, `sem mae`, `vai se fuder`, `vsfd`, `vai te fuder`, `vtfd`, `vao te fude`, `vai se fude`, `vtnc`, `vai toma no cu`, `otario`, `filho da egua`, `fdm`, `filho da mae`];

    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }

      if (foundInText) {
      message.delete();
      message.author.send(`ESSA PALAVRA É BLOQUEADA POR SER OFENSIVA!`);

    }

    if(cmd === `${prefix}desativaCongonhas`){
      message.author.send("Atualmente você esta desativado na ATC de Congonhas!!" + `${message.author}`)
          let reportschannel = message.guild.channels.find(`name`, "atc");
          if(!reportschannel) return message.channel.send("Este canal não existe!");
        }

    if(cmd === `${prefix}ativoCongonhas`){
      message.channel.send(`Atualmente` + `${message.author}` + "está ativo como ATC em Congonhas!")
      message.author.send("Atualmente você esta ativo na ATC de Congonhas!!" + `${message.author}`)
      let reportschannel = message.guild.channels.find(`name`, "atc");
      if(!reportschannel) return message.channel.send("Este canal não existe!");
    }
});
