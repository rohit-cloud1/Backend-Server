import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();


import routeCollection from "./routes/route.js";
import connectToDatabase from "./connectionDB/connectionToDB.js";
import deserializerUser from "./middlewair/deserializerUser.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(deserializerUser);

// routes
routeCollection(app);

// start server ONLY
app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`🚀 Server running on port ${PORT}`);
});
