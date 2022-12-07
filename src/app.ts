import express from "express";
// import registerRouters from "./routes";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

// registerRouters(app);

export default app;
