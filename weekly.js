exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`u have already claimed your weekly credit. Come back after ${addMoney.time.days} days, ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`u have claimed **${addMoney.amount}** 💸 as your weekly credit & now u have **${addMoney.after}** 💸. But u will lose your balance if u do not subscribe to SSRrules or MercurialMind on yt :P`);
};

exports.help = {
    name: "weekly",
    aliases: [],
    usage: "weekly"
}
