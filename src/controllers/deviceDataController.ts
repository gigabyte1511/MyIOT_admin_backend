import { Request, Response } from 'express';

import { DeviceModel } from '../models/deviceModel';
import { MeasureModel } from '../models/measureModel';
import createDeviceDataSchema from '../validators/deviceDataValidator';
import { getPreparedErrorsFromYup } from '../validators/utils';

type DeviceData = {
    device_id: string
    date: string
    measure_value: number
    measure_type: string
    voltage: number
    gps: string
    comment: string
}

export const addNewDeviceData = async (req: Request<DeviceData>, res: Response) => {
    // try {
    //     await createDeviceDataSchema.validate(req.body, { abortEarly: false })
    // } catch (error) {
    //     res
    //         .status(400)
    //         .json(getPreparedErrorsFromYup(error))
    //     return
    // }
    try {
        let deviceDataModelObj = await DeviceModel.findOne({ where: { device_name: req.body.device_name } })
        if (!deviceDataModelObj) deviceDataModelObj = await DeviceModel.create(req.body);
        else deviceDataModelObj.update(req.body)
        const result = deviceDataModelObj.createMeasure(req.body)
        res
            .status(200)
            .json(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export const getAllDeviceWithData = async (req: Request, res: Response) => {
    try {
        const allDeviceWithData = await DeviceModel.findAll({ include: MeasureModel })
        res
            .status(200)
            .json(allDeviceWithData)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export const getDeviceWithDataByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const getDeviceByID = await DeviceModel.findByPk(id, { include: MeasureModel })
        res
            .status(200)
            .json(getDeviceByID)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}