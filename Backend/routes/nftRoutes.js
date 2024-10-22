const express = require('express');
const router = express.Router();
const NFT = require('../models/NFT');

// Create a new NFT
router.post('/create', async (req, res) => {
  try {
    const { title, description, price, creator, imageUrl } = req.body;
    const nft = new NFT({ title, description, price, creator, imageUrl });
    await nft.save();
    res.status(201).json(nft);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all NFTs
router.get('/', async (req, res) => {
  try {
    const nfts = await NFT.find().populate('creator');
    res.json(nfts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get NFT details by ID
router.get('/:nftId', async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.nftId).populate('creator');
    res.json(nft);
  } catch (error) {
    res.status(404).json({ message: 'NFT not found' });
  }
});

module.exports = router;
