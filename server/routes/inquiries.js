import express from 'express';
import Inquiry from '../models/Inquiry.js';

const router = express.Router();

// Create new inquiry
router.post('/', async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    const savedInquiry = await inquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(400).json({ message: 'Error creating inquiry', error: error.message });
  }
});

// Get all inquiries (protected route)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;