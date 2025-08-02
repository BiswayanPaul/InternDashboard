const express = require('express');
const router = express.Router();
const Intern = require('../models/intern');

// 1. Add Intern (default password)
router.post('/add', async (req, res) => {
    try {
        const { name, referralCode, totalRaised } = req.body;
        const existing = await Intern.findOne({ name });

        if (existing) return res.status(400).json({ message: 'Intern already exists' });

        const total = Number(totalRaised) || 0;

        // Simple reward tiers based on amount raised
        const calculateRewards = (amount) => {
            const rewards = [];
            if (amount >= 500) rewards.push("🎁 Bronze Badge");
            if (amount >= 1000) rewards.push("🥈 Silver Badge");
            if (amount >= 2000) rewards.push("🥇 Gold Badge");
            if (amount >= 3000) rewards.push("🏆 Platinum Badge");
            if (amount >= 4000) rewards.push("💎 Diamond Badge");
            if (amount >= 5000) rewards.push("👑 Legend Badge");
            return rewards;
        };

        const newIntern = new Intern({
            name,
            referralCode,
            totalRaised: total,
            password: '12345678', // default
            rewards: calculateRewards(total),
            createdAt: new Date()
        });

        await newIntern.save();

        res.status(201).json({ message: 'Intern added', intern: newIntern });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});


// 2. Login Intern
router.post('/login', async (req, res) => {
    const { name, password } = req.body;
    try {
        const intern = await Intern.findOne({ name });
        if (!intern || intern.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Optionally, return a token here if you later use auth
        res.status(200).json({ message: 'Login successful', intern });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 3. Get Dashboard Info
router.get('/dashboard/:name', async (req, res) => {
    try {
        const intern = await Intern.findOne({ name: req.params.name });

        if (!intern) return res.status(404).json({ message: 'Intern not found' });

        res.json({
            name: intern.name,
            referralCode: intern.referralCode,
            totalRaised: intern.totalRaised,
            rewards: intern.rewards
        });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching dashboard', error: err.message });
    }
});

// 4. Change Password
router.post('/change-password', async (req, res) => {
    const { name, oldPassword, newPassword } = req.body;

    try {
        const intern = await Intern.findOne({ name });

        if (!intern || intern.password !== oldPassword) {
            return res.status(400).json({ message: 'Incorrect old password' });
        }

        intern.password = newPassword;
        await intern.save();

        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// 5. Leaderboard - Get all interns
router.get('/all', async (req, res) => {
    try {
        const interns = await Intern.find().sort({ totalRaised: -1 });
        res.json(interns);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching leaderboard', error: err.message });
    }
});

// 6. Optional: Check if intern exists (for signup)
router.get('/exists/:name', async (req, res) => {
    try {
        const intern = await Intern.findOne({ name: req.params.name });
        res.json({ exists: !!intern });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
