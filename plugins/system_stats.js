/* Copyright (C) 2020 TOXIC DEVIL
CODDED BY TOXIC DEVIL
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "šøš» *Hi Im Akina* šøš»\n\nā *Version:* ```1.0 Public Stable```\nā *Branch:* ```master```\nā *Developer:* ```SYSTEM ZOMBIES```\nā *Main Bot :* https://wa.link/snz5lj\nā *Github Profile :* https://github.com/Randix-kane\nā *Email :* systemzombiesx@gmail.com\nā *Stack :* https://cutt.ly/XmgUT8z\n\n```Thank You For Using AKina šŗ š```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n   *Poverd By ā¶ļøāļøā¾ļøāļøā¶ļø*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "šøš» *Hi Im Akina* šøš»\n\nā *Version:* ```1.0 Public Stable```\nā *Branch:* ```master```\nā *Developer:* ```SYSTEM ZOMBIES```\nā *Main Bot :* https://wa.link/snz5lj\nā *Github Profile :* https://github.com/Randix-kane\nā *Email :* systemzombiesx@gmail.com\nā *Stack :* https://cutt.ly/XmgUT8z\n\n```Thank You For Using AKina šŗ š```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n   *Poverd By ā¶ļøāļøā¾ļøāļøā¶ļø*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 
