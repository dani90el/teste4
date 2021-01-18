const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_funcionario : {type: String, required: true, upperCase: true},
    datanascimento_funcionario : {type: Date, required:true}, 
    cpf_funcionario: {type: String, required:true, unique: true},
    email_funcionario: {type: String, required:true},
    senha_funcionario: {type: String, required:true},
    cargo_funcionario: {type: String, required:true},
    situacao_funcionario: {type: String, upperCase: true, required:true, enum: ["Ativo", "Desligado"] }
});

const funcionario = mongoose.model("Funcionario", DataSchema);
module.exports = funcionario;
