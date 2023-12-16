import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//CORS setting
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//JASTO KHAL KO NI DATA AAUNA SAK6 IN THE FORM OF FORM OR URL
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//PDF HARU SAVE GARNA
app.use(express.static("public"));
app.use(cookieParser());

//IMPORT ROUTES
import userRouter from "./routes/user.routes.js";

//ROUTES DECLARATION
app.use("/api/v1/users", userRouter);

export { app };
