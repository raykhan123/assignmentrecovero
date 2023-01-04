const mongoose = require( 'mongoose' );



const adminSchema = new mongoose.Schema( {

    fullName: {
        type: String,
        required: true,
        maxLength: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        maxLength: 10
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'ADMIN',
        enum: [ 'ADMIN', "USER" ]
    }
}, { timestamps: true } )



module.exports = mongoose.model( 'admin', adminSchema )