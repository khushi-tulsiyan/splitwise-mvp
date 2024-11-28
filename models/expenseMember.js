module.exports = (sequelize, DataTypes) => {
    const ExpenseMember = sequelize.define('Expense_Member', {
        expense_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        share: DataTypes.FLOAT,
    }, { timestamps: true });
    return ExpenseMember;
};
