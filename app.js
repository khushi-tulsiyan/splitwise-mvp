require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const balanceRoutes = require('./routes/balanceRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);
app.use('/balances', balanceRoutes);

sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
});
