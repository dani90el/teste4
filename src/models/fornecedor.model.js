const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_fornecedor: {type: String, riquered: true, minLength: 3, maxLength: 40},
    nomefantasia_fornecedor:{type: String},
    cnpj_fornecedor : {type: String, riquered: true, unique: true}
},{
    timestamps:true
});

const fornecedor = mongoose.model('Fornecedor',DataSchema);
module.exports=fornecedor;