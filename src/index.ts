import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoutes from "./routes/myUserRoute";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to the db"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoutes);

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
