import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydatabase', 'myuser', 'mypassword', {
    host: 'db',
    dialect: 'postgres',
    logging: false,
});

export default sequelize;