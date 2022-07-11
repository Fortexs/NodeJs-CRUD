import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

// middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8080, () => console.log('server Bisa'));