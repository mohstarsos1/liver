const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res) => {
    try {
        res.render("pages/register", { title: ".: Register :.", layout: "layouts/auth-layout" });
    } catch (error) {
        console.log(error);
    }
});

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.render("/login");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
