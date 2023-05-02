// Определение модели продукта
import sequelize from "./index"
import { DataTypes } from 'sequelize'
import { MeasureModel } from "./measureModel"
import { StatusModel } from "./statusModel"

export const DeviceModel = sequelize.define('device', {
  device_name: {
    type: DataTypes.STRING,
    defaultValue: 'noName',
  },
})
DeviceModel.hasMany(MeasureModel, { onDelete: 'CASCADE' })
DeviceModel.hasMany(StatusModel, { onDelete: 'CASCADE' })