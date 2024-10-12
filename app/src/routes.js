const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ message: 'Aplicación Node.js con MongoDB desplegada en Azure' });
});

module.exports = router;
