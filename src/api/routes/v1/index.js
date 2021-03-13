const express = require('express');
const router = express.Router();
const studentRoutes = require('./students.route');
const orgRoute = require('./organization.route');

router.get('/status', (req, res) => res.send('OK'));

router.use('/students', studentRoutes);
router.use('/organization', orgRoute)

module.exports = router;