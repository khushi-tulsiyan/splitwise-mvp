const { Expense, Expense_Member } = require('../models');

exports.addExpense = async (req, res) => {
    try {
        const { name, amount, currency, members, date } = req.body;
        const expense = await Expense.create({
            name, amount, currency, created_by: req.headers.user_id, date
        });

        const expenseMembers = members.map(m => ({
            expense_id: expense.id,
            user_id: m.user_id,
            share: m.share,
        }));
        await Expense_Member.bulkCreate(expenseMembers);

        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
