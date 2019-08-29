import * as Sequelize from 'sequelize'
import { Puppy } from "../interfaces/puppy.interface"
import { SequelizeAttributes } from "../interfaces/ISequelizeAttributes"

// const db_name = "puppy_adoption_service"
// const sequelize = new Sequelize('mysql://root:dbpass@localhost:3306/' + db_name);

export default (sequelize: Sequelize.Sequelize) => {

    const attributes: SequelizeAttributes<Puppy> = {
        puppy_id: {
            type: Sequelize.INTEGER, // you can omit the `new` but this is discouraged
            autoIncrement: true,
            primaryKey: true
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


// import { Sequelize, Model, DataTypes } from 'sequelize';

// const db_name = "puppy_adoption_service"
// const sequelize = new Sequelize('mysql://root:dbpass@localhost:3306/' + db_name);

// export default class Puppy extends Model {
//     public puppy_id!: number;
//     public puppy_age!: string;
//     public puppy_breed!: string;
//     public description!: string;

//     public readonly createdAt!: Date;
//     public readonly updatedAt!: Date;
// }

// Puppy.init({
//     puppy_id: {
//         type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     puppy_age: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false,
//     },
//     puppy_breed: {
//         type: new DataTypes.STRING(128),
//         allowNull: false,
//     },
//     description: {
//         type: new DataTypes.STRING(128),
//         allowNull: false,
//     }
// },
//     {
//         sequelize,
//         tableName: 'puppy_info',
//     });


// // export async function cratePuppy() {
// //     // Please note that when using async/await you lose the `bluebird` promise context
// //     // and you fall back to native
// //     const newPuppy =  new Puppy({
// //         puppy_age: 2,
// //         puppy_breed: 'Dolmition',
// //         description: 'Very rare puppy to find'
// //     });
// //     newPuppy.save();
// // }
