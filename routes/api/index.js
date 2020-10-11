const path = require("path");
const router = require("express").Router();
const financialModelingRoutes = require("./financialmodeling");
const notTickerCompanyRoutes = require("./notickercompany");
const profileRoutes = require("./profile");
const tickerCompanyRoutes = require("./tickercompany");

// Financial Modeling routes
router.use("/financialmodeling", financialModelingRoutes);

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
