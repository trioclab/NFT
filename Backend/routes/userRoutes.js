const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user profile
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('createdNFTs');
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
