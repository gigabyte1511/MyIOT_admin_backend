require('dotenv').config()
import express from "express";
const cors = require('cors')
// const { sequelize } = require('./src/models/index')

import sequelize from './models/index'
import deviceSideRouter from "./routes/deviceSideRouter"
import adminSideRouter from "./routes/adminSideRouter"

const server = express()
const PORT = process.env.SERVER_PORT

server.use(cors())
// sequelize.sync({ force: true })
sequelize.sync({ alter: true })
    .then(() => {
        console.log('The DB has been succesfuly synced')
    })
    .catch((err: { message: string }) => {
        console.log(`Failed to sync DB: ${err.message}`)
    })

server.use(express.json())
// Роут сайта клиента
// server.use('/api/v0.1/client', clientSideRouter)
// Роут админки
server.use('/deivce-api/v0.1/device', deviceSideRouter)

server.use('/admin-api/v0.1/', adminSideRouter)

// server.use('/api/v0.1/admin', adminSideRouter)

server.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})
