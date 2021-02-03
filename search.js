exports.execute = async (client, message, args) => {
    let users = [
        "pocket",
        "coat",
        "ur mom",
        "street",
        "car",
        "old gaming pc",
        "shoe",
        "bed"
    ];
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 300000, customName: "search" });
    if (beg.onCooldown) return message.reply(`come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** u were caught! u couldn't get money kiddo.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** was somewhat profitable, and u found **${beg.amount}** 💸. now u have **${beg.after}** 💸.`);
};

exports.help = {
    name: "search",
    aliases: [],
    usage: "search"
}
