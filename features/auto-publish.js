"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (client) {
    // Listen for new messages
    client.on('messageCreate', function (messageCreate) {
        // console.log(messageCreate.channel.type)
        // try{
        //   if (messageCreate.crosspostable === true){
        //     messageCreate.crosspost()
        //     console.log('Crossposted/Published message - '+messageCreate.createdAt)
        // }
        // } catch(err){
        //   console.error(`...`+err)
        // }
        if (messageCreate.crosspostable === true) {
            messageCreate.crosspost();
            //console.log('Crossposted/Published message - '+messageCreate.createdAt)
        }
        else {
            return;
        }
        // if (messageCreate.channel.type === 'GUILD_NEWS') {
        //   messageCreate.crosspost()
        //   console.log('Crossposted/Published message - '+messageCreate.createdAt)
        // }
    });
});
