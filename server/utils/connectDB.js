const mongoose = require("mongoose");
//passKey: 2ZdEV2LxpKDVssVa
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://maharajshankar012:2ZdEV2LxpKDVssVa@mern-blog.3vv4bkp.mongodb.net/Mern-blog?retryWrites=true&w=majority&appName=Mern-blog"
    );
    console.log(`Mangodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`error connecting to MangoDB ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
