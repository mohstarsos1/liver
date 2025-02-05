const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const sequelize = require("./database");
const session = require("express-session");

//import routes
const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const error404Router = require("./routes/error404");

const app = express();

// Sync Database
sequelize
    .sync({ alter: true })
    .then(() => console.log("✅ Database synced!"))
    .catch((err) => console.error("❌ Sync error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main-layout");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(session({ secret: "mohstarsos1", cookie: { maxAge: 60000 } }));

app.use(homeRouter);
app.use(aboutRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(error404Router);

app.listen(5000, () => {
    console.log(`server is running on port 5000`);
});
