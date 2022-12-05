import express from "express";

const app = express();
const port = process.env.PORT || 80;
app.use("/", (req, res) => {
  res.json({ message: "Hello From Express App" });
});

app.listen(port, () => {
  console.log(`Starting Server on Port ${port}`);
});
