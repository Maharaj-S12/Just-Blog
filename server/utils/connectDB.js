const mongoose = require("mongoose");
//passKey: 2ZdEV2LxpKDVssVa
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mangodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`error connecting to MangoDB ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
