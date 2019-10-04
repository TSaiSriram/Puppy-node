import * as Sequelize from 'sequelize'
import { Puppy } from "../interfaces/puppy.interface"
import { SequelizeAttributes } from "../interfaces/ISequelizeAttributes";

// const db_name = "puppy_adoption_service"
// const sequelize = new Sequelize('mysql://root:dbpass@localhost:3306/' + db_name);

export default (sequelize: Sequelize.Sequelize) => {

    const attributes: SequelizeAttributes<Puppy> = {
        puppy_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        puppy_age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        puppy_breed: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    };



    type MyModelStatic = typeof Sequelize.Model & {
        new(values?: object, options?: Sequelize.BuildOptions): Puppy
    }

    const Puppy: any = <MyModelStatic>sequelize.define('puppy-info', attributes, {
        timestamps: false,
        freezeTableName: true,
        tableName: "puppy-info"
    });

    return Puppy;
}
