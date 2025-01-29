const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main-layout");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.get("/", (req, res) => {
    res.render("pages/home", { title: ".: Liver :.", pageTitle: "داشبورد" });
});

app.get("/about", (req, res) => {
    res.render("pages/about", { title: ".: About Us :.", pageTitle: "درباره ما" });
});

app.get("/login", (req, res) => {
    res.render("pages/login", { title: ".: Login :.", layout: "layouts/auth-layout" });
});

app.get("/register", (req, res) => {
    res.render("pages/register", { title: ".: Register :.", layout: "layouts/auth-layout" });
});

app.get("*", function (req, res) {
    res.status(404).render("pages/404", { title: ".: Error 404 :.", layout: "layouts/auth-layout" });
});

app.listen(5000, () => {
    console.log(`server is running on port 5000`);
});
