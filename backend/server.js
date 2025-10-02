import "dotenv/config";
import express from "express";
import routes from "./Routes/index.js";
import cors from "cors";
import connectCloduinary from "./DATABASE/cloudinary.config.js";

const app = express();
connectCloduinary();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Welcome to LawConnect"));
app.use(routes);

app.listen(port, () => console.log(`Server started on port ${port}!`));

