const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    codigobarras_produto : {type: String, require: true, unique: true},
    nome_produto : {type: String, require: true, unique: false},
    tipo_produto : {type:String, require: true, unique: false},
    descricao_produto : {type:String, require: false, unique: false},
    preco_produto : {type:String, require:true, unique: false},
    quantidade_produto : {type:Number, require: false, unique: false, default: 0}
},{
    timestamps: true
}
);

const produto = mongoose.model('Produtos', DataSchema);
module.exports=produto;