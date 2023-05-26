const express = require('express');

const router = express.Router();

const { protect } = require("../Middleware/authMiddleware");

const { registerUser, loginUser, getMe, getAll } = require('../Controllers/userController')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
router.get('/all', getAll);
module.exports = router
