import yup from 'yup'

const createDeviceDataSchema = yup.object({
  device_name: yup
    .string(),
  date: yup
    .string()
    .required('Поле обязательно для заполнения'),
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

export default createDeviceDataSchema