const express = require("express");
const cors = require("cors");
const appRouter = require("./app/route");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })  
);

app.use("/uploads", express.static("uploads"));

app.use("/api/admin", appRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}......`));
