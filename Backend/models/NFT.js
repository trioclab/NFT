const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Link to User model
  isSold: { type: Boolean, default: false },
  bids: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      bidAmount: { type: Number },
    },
  ],
});

module.exports = mongoose.model('NFT', nftSchema);
