const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const internRoutes = require('./routes/intern');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Error:', err.message));

// Use routes
app.use('/api/intern', internRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
