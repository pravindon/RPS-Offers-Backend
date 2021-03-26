const express = require('express');
const router = express.Router();
const studentRoutes = require('./students.route');
const orgRoute = require('./organization.route');
const euProfileRoutes = require('./eu-profile.route');

router.get('/status', (req, res) => res.send('OK'));

router.use('/students', studentRoutes);
router.use('/organization', orgRoute);
router.use('/euProfile', euProfileRoutes);

module.exports = router;