const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello amid");
});

const port = 5000;

app.listen(port || 5000, () => {
    console.log(`server is running on port ${port}`);
});
