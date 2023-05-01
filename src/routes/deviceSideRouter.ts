import express from "express";
// Роут описывает взамидействие администратора над содержимым базы данных
import { addNewDeviceData } from "../controllers/deviceDataController"

const deviceSideRouter = express.Router()

deviceSideRouter.route('/data/')
  // Получить все продукты
  // .get(getAllDeviceWithData)
  // Добавить новые показания
  .post(addNewDeviceData)

export default deviceSideRouter