var mongoose = require('mongoose')
var Schema = mongoose.Schema

const AddressSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    collection: "addresses",
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
})


module.exports.AddressSchema = AddressSchema
module.exports.Address = mongoose.model('Address', AddressSchema)
