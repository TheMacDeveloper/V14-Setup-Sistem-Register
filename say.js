const Discord = require("discord.js");

exports.run = async (client, message, args) => {


	message.channel.send("Örnek komutu çalışıyor!")


};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "örnek"
};
