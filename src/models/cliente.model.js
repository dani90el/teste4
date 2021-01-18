const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    cpf_cliente: {type:String, required:true, minlength:14, maxlength:14, unique: true},
    nome_cliente : {type:String, required: true},
    datanascimento_cliente : {type:Date, required:true},
    email_cliente:{type:String, required:true},
    senha_cliente:{type:String, required:true}
},{
    timestamps: true
});

const cliente = mongoose.model('Cliente', DataSchema);
module.exports = cliente;