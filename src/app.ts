import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

app.use(cors({
  origin: 'https://elturanportfolio.netlify.app'
}));
app.use(express.json());

app.use("/api", routes);

app.use(errorMiddleware)

export default app;