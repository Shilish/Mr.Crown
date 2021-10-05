import mongoose, { Schema } from 'mongoose'

const reqString = {
    type: String,
    required: true
  }

const schema = new Schema({
    _id: reqString,  //guild.id
    guildName: reqString,
    channelId: reqString,
    text: reqString
})

const name = 'setWelcomeChannel'

export default mongoose.models[name] || mongoose.model(name, schema, name)