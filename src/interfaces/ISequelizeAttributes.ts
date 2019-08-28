import { DataTypeAbstract, ModelAttributeColumnOptions, IntegerDataType } from 'sequelize';

type SequelizeAttribute = string | IntegerDataType | DataTypeAbstract | ModelAttributeColumnOptions;

export type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: SequelizeAttribute
};