// Определение модели продукта
import sequelize from "./index"
import { DataTypes } from 'sequelize'

export const StatusModel = sequelize.define('status', {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  voltage: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  gps: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.STRING,
  },
})