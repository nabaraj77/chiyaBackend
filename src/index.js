import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/dbConnection.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running in port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB connection failed !!!", error);
    throw error;
  });
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening in port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.err("Error:", err);
//     throw err;
//   }
// })();
