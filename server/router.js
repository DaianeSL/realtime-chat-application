const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ server: 'server is running!' });
});

module.exports = router;
