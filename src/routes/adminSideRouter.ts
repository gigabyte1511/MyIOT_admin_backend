// Роут описывает взамидействие администратора над содержимым базы данных
import express from "express"
import { getAllDevice, getDeviceByID, deleteDeviceByID } from "../controllers/deviceController"
import { getAllDeviceWithData, getDeviceWithDataByID } from "../controllers/deviceDataController"
const adminSideRouter = express.Router()

// Действия администратора
adminSideRouter.route('/device/')
  // Получить все устройства
  .get(getAllDevice)

adminSideRouter.route('/device/data')
  // Получить все устройства с их показаниями
  .get(getAllDeviceWithData)

adminSideRouter.route('/device/data/:id')
  // Получить устройство с его показаниями
  .get(getDeviceWithDataByID)

adminSideRouter.route('/device/:id')
  // Получить устройство по его ID
  .get(getDeviceByID)
  // Удалить устройство по ID
  .delete(deleteDeviceByID)






export default adminSideRouter