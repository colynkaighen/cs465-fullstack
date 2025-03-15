const express = require('express');
const router = express.Router();

// Sample API Route (for testing)
router.get('/', (req, res) => {
    res.json({ message: "API is working!" });
});

module.exports = router;
