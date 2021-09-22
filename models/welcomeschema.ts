import mongoose, { Schema } from 'mongoose'

const reqString = {
    type: String,
    required: true
  }

const schema = new Schema({
    _id: reqString,  //guild.id
    channelId: reqString,
    guildName: reqString
})

const name = 'setWelcomeChannels'

//export = mongoose.model(name, schema)
export = mongoose.models[name] || mongoose.model(name, schema, name)