require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const venueRoutes = require('./routes/venues');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/venues', venueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));