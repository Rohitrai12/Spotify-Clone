import moongose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await moongose.connect(process.env.Mongo_URI);
    console.log("Databse Connected successfully✅");
  } catch (error) {
    console.log("Error connecting to mongodb", error);
    process.exit(1);
  }
};

export default connectDB