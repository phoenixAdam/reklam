const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send('**YARDIM MENÜSÜ**'
        '**<> ve [] Sadece Örnek Verebilmek Amacýyla Konmuþtur. Komut Yazarken Onlarý Kullanmayýnýz'
        'pr:reklam-yap <link> : Attýðýnýz Linkle Reklam Yapar'
        'pr:reklam-kaldýr <mesajID> : Reklamý Kaldýrýr (Sadece **Kurucu ve Reklam Görevlisi** Yapabilir'
        'pr:reload : Botu Reloadlar'    );
    message.delete();
    const mesajat = new Discord.RichEmbed()
        .setColor('176d68')
        .setDescription('**' + mesaj + '**')