const Joi = require('@hapi/joi')

class AddressValicationSchema {
    static create = Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required().length(10)
    });

    static delete = Joi.object({
        id: Joi.string().required()
    })

    static update = Joi.object({
        id: Joi.string().required("Id is required!"),
        name: Joi.string(),
        phone: Joi.string().length(10)
    })

    static getAddress = Joi.object({
        id: Joi.string().required("Id is required!"),
    })

}


module.exports = {
    AddressValicationSchema
}