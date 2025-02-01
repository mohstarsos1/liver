const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("liver_db", "root", "root", {
    host: "localhost",
    port: 8889,
    dialect: "mysql",
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ MySQL connected successfully!");
    } catch (error) {
        console.error("❌ Unable to connect to the database:", error);
    }
};

connectDB();

module.exports = sequelize;
