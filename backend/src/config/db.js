import mongoose, { connect } from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNEXTIONSTRING);
        console.log("Ket noi DB thanh cong");
    } catch (error) {
        console.log("Ket noi DB that bai");
        process.exit(1); // exit whith error
    }
        };