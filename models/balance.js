module.exports = (sequelize, DataTypes) => {
    const Balance = sequelize.define('Balance', {
        user_id: DataTypes.INTEGER,
        with_user_id: DataTypes.INTEGER,
        balance: DataTypes.FLOAT,
    }, { timestamps: true });
    return Balance;
};
