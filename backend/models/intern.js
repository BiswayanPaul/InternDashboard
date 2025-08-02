const mongoose = require('mongoose');

const InternSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    referralCode: {
        type: String,
        required: true,
        unique: true
    },
    totalRaised: {
        type: Number,
        default: 0
    },
    rewards: {
        type: [String],
        default: []
    },
    password: {
        type: String,
        required: true,
        default: '12345678'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Intern', InternSchema);
