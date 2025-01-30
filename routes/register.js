const router = require("express").Router();

router.get("/register", (req, res) => {
    res.render("pages/register", { title: ".: Register :.", layout: "layouts/auth-layout" });
});

module.exports = router;
