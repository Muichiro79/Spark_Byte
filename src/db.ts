// db.ts
import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from the .env file

const connectDB = async () => {
  const dbURI = process.env.MONGODB_URI || ''; // Use the MONGODB_URI from the environment variable
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;