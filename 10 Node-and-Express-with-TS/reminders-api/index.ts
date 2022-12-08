import express, { Express } from "express";
import dotenv from "dotenv";

import remindersRouter from "./routers/reminder";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello World, I'm practicing TS with node and Express.");
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
);
