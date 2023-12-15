import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
dotenv.config({
  path: "./env",
});

connectDB();
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()(async () => {
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
