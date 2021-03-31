const express = require('express');
const router = express.Router();
const studentRoutes = require('./students.route');
const orgRoute = require('./organization.route');
const saSampleProductRoutes = require('./sa-sample-products.route');
const euProfileRoutes = require('./eu-profile.route');
const adminPostOffer = require('./admin-post-offers.route');

// Sample API 
router.get('/status', (req, res) => res.send('OK'));
router.use('/students', studentRoutes);

// Super Admin Section
router.use('/organization', orgRoute);
router.use('/saSampleProduct', saSampleProductRoutes);

/// Admin Section
router.use('/postOffers', adminPostOffer);

// End User Section
router.use('/euProfile', euProfileRoutes);

module.exports = router;