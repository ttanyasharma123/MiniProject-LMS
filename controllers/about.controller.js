const express = require('express');
const router = express.Router();

// Assuming you have a service to fetch any dynamic data needed for the about page
const aboutService = require('../services/about.service');

// Define a route to render the about page
router.get('/about', async (req, res, next) => {
    try {
        // Fetch any dynamic data needed for the about page from the aboutService
        // For simplicity, let's assume there's no dynamic data needed in this example

        // Render the about page
        res.render('about', { year: new Date().getFullYear() });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
