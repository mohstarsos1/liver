const router = require("express").Router();

router.get("*", function (req, res) {
    res.status(404).render("pages/404", { title: ".: Error 404 :.", layout: "layouts/auth-layout" });
});

module.exports = router;
