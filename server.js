const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static("build"));
app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, function () {
    console.log("Server started on port " + port);
});
