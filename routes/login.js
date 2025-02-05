const router = require("express").Router();
const User = require("../models/User");

router.get("/login", (req, res) => {
    const message = req.session?.message;
    delete req.session?.message; // حذف پیام بعد از نمایش
    res.render("pages/login", { title: ".: Login :.", message, layout: "layouts/auth-layout" });
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(401).json({ message: "❌ Invalid email or password!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "❌ Invalid email or password!" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "2h" });

        res.json({ message: "✅ Login successful!", token });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
