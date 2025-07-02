import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo , {
          
        });
        console.log(`MongoDB Connected: sucessfully `);
    } catch (err) {
        console.error(`Error:`);
      // Exit process with failure
    }
};
export default connectDB;

// This