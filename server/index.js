const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// --- Schema Definition ---
const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    image: String,
    link: String,
    featured: Boolean
});

const Project = mongoose.model('Project', ProjectSchema);

// --- Routes ---

// Get all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Seed Database (Run this once via Postman or Curl to add data, or keep it simple for now)
app.post('/api/projects', async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
