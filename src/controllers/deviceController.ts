import { Request, Response } from 'express';
import { DeviceModel } from '../models/deviceModel';
import { MeasureModel } from '../models/measureModel';

type DeviceData = {
  device_id: string
  date: string
  measure_value: number
  measure_type: string
  voltage: number
  gps: string
  comment: string
}

export const getAllDevice = async (req: Request, res: Response) => {
  try {
    const allDeviceWithData = await DeviceModel.findAll()
    res
      .status(200)
      .json(allDeviceWithData)
  }
  catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const getDeviceByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const getDeviceByID = await DeviceModel.findByPk(id)
    res
      .status(200)
      .json(getDeviceByID)
  }
  catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

export const deleteDeviceByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const resFromDB = await DeviceModel.destroy({
      where: {
        id: [id],
      },
    })
    if (resFromDB === 0) {
      console.log(resFromDB)
      res
        .status(400)
        .json('Device not found')
      return
    }
    console.log(resFromDB)
    res
      .status(200)
      .json('Device removed successfully')
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
