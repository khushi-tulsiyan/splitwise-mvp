const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        const { email, password, currency } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, currency });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
