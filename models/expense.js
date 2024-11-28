module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define('Expense', {
        name: DataTypes.STRING,
        amount: DataTypes.FLOAT,
        currency: DataTypes.STRING,
        created_by: DataTypes.INTEGER,
        date: DataTypes.DATE,
    }, { timestamps: true });
    return Expense;
};
