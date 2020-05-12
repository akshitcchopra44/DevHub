const express = require('express');
const router = express.Router();


// @route    GET api/posts
// @desc     Test router
// @access   PUBlic
router.get('/', (req, res) => res.send('Post route'));

module.exports = router;
