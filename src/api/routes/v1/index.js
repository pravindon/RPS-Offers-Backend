const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const studentRoutes = require('./students.route');
const orgRoute = require('./organization.route');
const saSampleProductRoutes = require('./sa-sample-products.route');
const euProfileRoutes = require('./eu-profile.route');
const adminPostOffer = require('./admin-post-offers.route');
const userAuthRoutes = require('../../auth/eu-auth');
const adminAuthRoutes = require('../../auth/admin-auth');
const superAdminAuthRoutes = require('../../auth/super-admin-auth');
const postRoutes = require('../../auth/post');
// Sample API 
dotenv.config();
router.get('/status', (req, res) => res.send('OK'));
router.use('/students', studentRoutes);

// Super Admin Section
router.use('/organization', orgRoute);
router.use('/saSampleProduct', saSampleProductRoutes);
router.use('/user/superadmin', superAdminAuthRoutes);

/// Admin Section
router.use('/postOffers', adminPostOffer);
router.use('/admin', adminAuthRoutes);

// End User Section
router.use('/euProfile', euProfileRoutes);
router.use('/user', userAuthRoutes);
router.use('/post', postRoutes)

module.exports = router;