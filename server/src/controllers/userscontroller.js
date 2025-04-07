const User = require('../models/usersmodel');

// GET /api/users/me
const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// GET /api/users/:id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// PUT /api/users/:id
const updateUser = async (req, res) => {
    try {
        if (req.user._id.toString() !== req.params.id)
            return res.status(403).json({ message: 'Access denied' });

        const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        }).select('-password');

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// DELETE /api/users/:id
const deleteUser = async (req, res) => {
    try {
        if (req.user._id.toString() !== req.params.id)
            return res.status(403).json({ message: 'Access denied' });

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = {
    getCurrentUser,
    getUserById,
    updateUser,
    deleteUser
};
