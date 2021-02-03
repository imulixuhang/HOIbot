exports.execute = async (client, message, args) => {
    let users = [
        "Catto",
        "somebody",
        "ur mom",
        "HOIman",
        "Savage",
        "Mind"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`shut up, come back after ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** go away, poor idiot`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** donated you **${beg.amount}** 💸. Now you have **${beg.after}** 💸.`);
};

exports.help = {
    name: "beg",
    aliases: [],
    usage: "beg"
}
