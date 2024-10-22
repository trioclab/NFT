const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdNFTs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFT' }], // NFTs created by the user
});

module.exports = mongoose.model('User', userSchema);
