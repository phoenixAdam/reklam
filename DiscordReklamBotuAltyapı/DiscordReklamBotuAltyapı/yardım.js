const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send('**YARDIM MEN�S�**'
        '**<> ve [] Sadece �rnek Verebilmek Amac�yla Konmu�tur. Komut Yazarken Onlar� Kullanmay�n�z'
        'pr:reklam-yap <link> : Att���n�z Linkle Reklam Yapar'
        'pr:reklam-kald�r <mesajID> : Reklam� Kald�r�r (Sadece **Kurucu ve Reklam G�revlisi** Yapabilir'
        'pr:reload : Botu Reloadlar'    );
    message.delete();
    const mesajat = new Discord.RichEmbed()
        .setColor('176d68')
        .setDescription('**' + mesaj + '**')