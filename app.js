const express = require("express");
const path = require("path");
const app = express();
const { PORT } = require("./config");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));

const dashboardRouter = require("./routes/dashboard");
const homeRouter = require("./routes/home");

app.use("/", homeRouter);
app.use("/dashboard", dashboardRouter);

app.listen(PORT, () => {
  console.log(`Express app running on port : ${PORT} `);
});
