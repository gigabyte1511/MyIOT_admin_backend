// Определение модели продукта
import sequelize from "./index"
import { DataTypes } from 'sequelize'

export const MeasureModel = sequelize.define('measure', {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measure_value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  measure_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})