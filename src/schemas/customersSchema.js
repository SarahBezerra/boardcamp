import joi from 'joi';

const customersSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().required().pattern(/^[0-9]{11,12}$/),
    cpf: joi.string().required().pattern(/^[0-9]{11}$/),
    birthday: joi.string().required().pattern(/^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
})

export default customersSchema;