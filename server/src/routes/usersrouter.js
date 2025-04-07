const express = require('express');
const router = express.Router();
const {
    getCurrentUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userscontroller');

const ensureAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    return res.status(401).json({ message: 'Unauthorized' });
};

router.get('/me', ensureAuth, getCurrentUser);
router.get('/:id', ensureAuth, getUserById);
router.put('/:id', ensureAuth, updateUser);
router.delete('/:id', ensureAuth, deleteUser);

module.exports = router;
