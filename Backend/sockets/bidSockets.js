const NFT = require('../models/NFT');

const handleBid = (io, socket) => {
  socket.on('newBid', async ({ nftId, bidAmount, userId }) => {
    try {
      const nft = await NFT.findById(nftId);
      nft.bids.push({ bidAmount, userId });
      await nft.save();

      // Emit updated bid data to all clients
      io.emit('bidUpdated', { nftId, bids: nft.bids });
    } catch (error) {
      console.error('Error handling bid:', error);
    }
  });
};

module.exports = handleBid;
