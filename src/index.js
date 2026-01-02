import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routeCollection from "./routes/route.js";
import connectToDatabase from "./connectionDB/connectionToDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// routes
routeCollection(app);

// start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// connect database separately
connectToDatabase()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database error:", err));
