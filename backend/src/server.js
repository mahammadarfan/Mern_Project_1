import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
// const express = require("express")
// console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

app.use("/api/notes", notesRoutes);
// app.use("/api/products", productsRoutes);
// app.use("/api/posts", postsRoute);
// app.use("/api/payments", paymentsRoute);
// app.use("/api/emails", emailsRoute);


app.listen (PORT, () => {
    console.log("Server started on PORT:", PORT);
    
});

