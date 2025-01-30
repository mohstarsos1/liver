const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("pages/home", { title: ".: Liver :.", pageTitle: "داشبورد" });
});

module.exports = router;
