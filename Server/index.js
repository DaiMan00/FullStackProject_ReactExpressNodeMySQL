const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./Routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./Routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is now running on port 3001");
    });
});
