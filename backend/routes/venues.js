const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue');
const auth = require('../middleware/auth');

// Get all venues
router.get('/', async (req, res) => {
    try {
        const venues = await Venue.find().sort('-createdAt');
        res.json(venues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new venue
router.post('/', auth, async (req, res) => {
    const venue = new Venue(req.body);
    try {
        const newVenue = await venue.save();
        res.status(201).json(newVenue);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get venues by filter
router.get('/filter', async (req, res) => {
    const { priceRange, location } = req.query;
    let query = {};

    if (location && location !== 'all') {
        query.location = location;
    }

    if (priceRange && priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        query.price = { $gte: min };
        if (max) query.price.$lte = max;
    }

    try {
        const venues = await Venue.find(query);
        res.json(venues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete venue
router.delete('/:id', auth, async (req, res) => {
    try {
        await Venue.findByIdAndDelete(req.params.id);
        res.json({ message: 'Venue deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;