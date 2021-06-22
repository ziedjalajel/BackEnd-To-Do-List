const express = require("express");

const cors = require("cors");

const db = require("./db/models");

const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.use((req, res, next) => {
  //   const err = new Error("Path Not Found");
  //   err.status = 404;
  //   next(err);
  res.status(404).json({ message: "Page Does Not Exist/Invalid URL" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
db.sequelize.sync();

app.listen(8080, () => console.log(`The Applicatin Runs On localhost:8080`));
