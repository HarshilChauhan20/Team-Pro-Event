import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  guestCount: {
    type: Number,
    required: true,
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: Number,
  }],
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'confirmed', 'completed'],
    default: 'new',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Inquiry', inquirySchema);