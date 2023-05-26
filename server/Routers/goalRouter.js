const express = require('express');

const { getGoals, postGoals, updateGoals, deleteGoals } = require('../Controllers/goalController')

const { protect } = require('../Middleware/authMiddleware');

const router = express.Router()

router.route('/').get(protect, getGoals).post(protect, postGoals)

router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

module.exports = router