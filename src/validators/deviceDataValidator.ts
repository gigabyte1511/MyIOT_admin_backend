import * as yup from 'yup';

export const createDeviceDataSchema = yup.object({
  device_name: yup
    .string(),
  date: yup
    .string()
    .required(),
  measure_value: yup
    .number(),
  measure_type: yup
    .string(),
  voltage: yup
    .number(),
  gps: yup
    .string(),
  comment: yup
    .string(),
})