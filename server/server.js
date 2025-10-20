import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/products.js';
import inquiryRoutes from './routes/inquiries.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Team Pro Events API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

let isConnected = false;
async function connectDB() {
  
  
}