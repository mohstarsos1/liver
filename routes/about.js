const router = require("express").Router();

router.get("/about", (req, res) => {
    res.render("pages/about", { title: ".: About Us :.", pageTitle: "درباره ما" });
});

module.exports = router;
