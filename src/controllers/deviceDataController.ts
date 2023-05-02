import { Request, Response } from 'express';
import { ValidationError } from 'yup';
import { DeviceModel } from '../models/deviceModel';
import { MeasureModel } from '../models/measureModel';
import { StatusModel } from '../models/statusModel';
import { createDeviceDataSchema } from '../validators/deviceDataValidator';
import { getPreparedErrorsFromYup } from '../validators/utils';

import { DeviceData } from '../types/DeviceDataType';

export const addNewDeviceData = async (req: Request<DeviceData>, res: Response): Promise<void> => {
    try {
        await createDeviceDataSchema.validate(req.body, { abortEarly: false })
    } catch (error: ValidationError) {
        res
            .status(400)
            .json(getPreparedErrorsFromYup(error))
        return
    }
    try {
        const { id, ...data } = req.body
        let deviceDataModelObj = await DeviceModel.findByPk(id)
        if (!deviceDataModelObj) deviceDataModelObj = await DeviceModel.create(data);
        else deviceDataModelObj.update(data)

        deviceDataModelObj.createMeasure(data)
        deviceDataModelObj.createStatus(data)
        res
            .status(200)
            .json(deviceDataModelObj)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export const getAllDeviceWithData = async (req: Request, res: Response): Promise<void> => {
    try {
        const allDeviceWithData = await DeviceModel.findAll({ include: [MeasureModel, StatusModel] })
        res
            .status(200)
            .json(allDeviceWithData)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export const getDeviceWithDataByID = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const getDeviceByID = await DeviceModel.findByPk(id, { include: [MeasureModel, StatusModel] })
        res
            .status(200)
            .json(getDeviceByID)
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}