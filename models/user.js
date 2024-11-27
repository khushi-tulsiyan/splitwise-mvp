module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        currency: { type: DataTypes.STRING, defaultValue: 'USD' },
    }, { timestamps: true });
    return User;
};
