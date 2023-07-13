import express from "express";
import dotnenv from "dotenv";
import cors from "cors";
import Connect from "./db/index.js";
import UserRoutes from "./routes/userRoutes.js";

dotnenv.config();

const PORT = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Welcome to Notes API");
// });

app.use("/api/users", UserRoutes);

app.listen(PORT, () => {
  Connect();
  console.log(`Server is started at PORT ${PORT}`);
});
