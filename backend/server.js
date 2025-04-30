require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const taskRoutes = require("./routes/taskRoutes");
const empRoutes = require("./routes/empRoutes");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));
    console.log("MONGO_URI:", process.env.MONGO_URI);


app.use("/api/tasks", taskRoutes);
app.use("/api/emp", empRoutes);

const PORT = process.env.PORT || 5500;
console.log("PORT:", PORT);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
