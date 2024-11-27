const { Balance } = require('../models');

exports.getBalances = async (req, res) => {
    try {
        const balances = await Balance.findAll({ where: { user_id: req.headers.user_id } });
        res.json(balances);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
