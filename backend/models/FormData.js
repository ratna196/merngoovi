const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    country: String,
    course: String
})

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
