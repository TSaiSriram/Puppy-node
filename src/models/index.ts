import Sequelize from 'sequelize'
import puppyModel from "../models/puppy.model";

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];


const _Sequelize: any = Sequelize;

export const sequelize = new _Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

const db = {
    sequelize,
    Sequelize,
    Puppy: puppyModel(sequelize)
};

// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db)
//     }
// })

db.sequelize.sync();

export default db
