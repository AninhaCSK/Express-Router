import express from "express";
import product from "./routes/product.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/product",product);

app.listen(5000, () => console.log("Port is listening: 5000"));