const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Route/Member');
const authRoutes1 = require('./Route/Issue');
const imageRouter= require('./Route/Image');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE']
}));

// Routes
app.use("/api/member", authRoutes);
app.use("/api/issue",authRoutes1);
app.use('/api/image',imageRouter);

// Static files
app.use("/avatars", express.static("public"));
app.use('/uploads', express.static('uploads'));


// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
