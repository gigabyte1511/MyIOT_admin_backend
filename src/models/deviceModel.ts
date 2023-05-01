// Определение модели продукта
import sequelize from "./index"
import { DataTypes } from 'sequelize'
import { MeasureModel } from "./measureModel"

export const DeviceModel = sequelize.define('device', {
  device_name: {
    type: DataTypes.STRING,
    defaultValue: 'noName',
  },
  voltage: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  gps: {
    type: DataTypes.STRING,
  },
  comment: {
    type: DataTypes.TEXT,
    defaultValue: 'No comment',
  },
})
DeviceModel.hasMany(MeasureModel, { onDelete: 'CASCADE' })