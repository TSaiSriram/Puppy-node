import { IntegerDataType } from "sequelize/types";

export interface Puppy {
    puppy_id: number;
    puppy_age: number;
    puppy_breed: string;
    description: string;
}