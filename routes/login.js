const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("pages/login", { title: ".: Login :.", layout: "layouts/auth-layout" });
});

module.exports = router;
