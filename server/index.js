const express = require("express");
const cors = require("cors");
require("./utils/connectDB")();
require("dotenv").config();
const upload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ 
//   origin: ["https://just-blog-client-ten.vercel.app"],
//   methods : ["POST","GET","PATCH","DELETE"],
//   credentials: true
// }));
const corsOptions = {
  origin: ["https://just-blog-client-git-main-maharaj-projects.vercel.app"],
  methods: ["POST", "GET", "PATCH", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// Explicitly handle preflight requests
app.options("*", cors(corsOptions));

app.use(upload());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
