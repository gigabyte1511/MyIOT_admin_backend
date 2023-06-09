// Инициализация подключения к базе данных
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
})
sequelize.authenticate()
  .then(() => {
    console.log(`Connection to DB ${process.env.DB_NAME} has been established successfully.`)
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error)
  })

export default sequelize
