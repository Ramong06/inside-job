const path = require("path");
const router = require("express").Router();
const companyProfileRoutes = require("./companyprofile");
const incomeStatementRoutes = require("./incomestatement");
const notTickerCompanyRoutes = require("./notickercompany");
const profileRoutes = require("./profile");
const tickerCompanyRoutes = require("./tickercompany");

// Financial Modeling routes
router.use("/companyprofile", companyProfileRoutes);
router.use("/incomestatement", incomeStatementRoutes);

// Not Ticker Company Routes
router.use("/notickercompany", notTickerCompanyRoutes);

// Profile Routes
router.use("/profile", profileRoutes);

// Ticker Company Routes
router.use("/tickercompany", tickerCompanyRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
