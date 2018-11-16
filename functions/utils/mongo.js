require("dotenv").config();
const mongoose = require("mongoose");

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    process.env.mongoURI,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
