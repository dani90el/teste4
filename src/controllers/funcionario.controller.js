const Produto = require('../models/funcionario.model');
const { checkout } = require('../routes');

module.exports = {
    async index(req, res) {
        const funcionarios = await Funcionario.find();
        res.json(funcionarios);
    },
    async create(req, res) {
        const data = {
            nome_funcionario, datanascimento_funcionario, cpf_funcionario, email_funcionario, senha_funcionario,
            cargo_funcionario, situacao_funcionario
        } = req.body;
        let data = {};
        let func = await Funcionario.findOne({ _id });
        if (!func) {
            data = {
                nome_funcionario, datanascimento_funcionario, cpf_funcionario, email_funcionario, senha_funcionario,
                cargo_funcionario, situacao_funcionario
            };
            funcionario = await Funcionario.create(data);
            return res.status(200).json(funcionario);
        } else {
            return res.status(500).json(funcionario);
        }
    },
    async details(req, res){
        const {_id} = req.params;
        const func = await Funcionario.findOne({ _id });
        res.json(func);
    },
    async delete(req, res){
        const {_id} = req.params;
        const user = await Funcionario.findByIdAndDelete({ _id }); 
        return res.json(user);
    },
    async update(req, res){
        const {nome_funcionario, datanascimento_funcionario, cpf_funcionario, email_funcionario, senha_funcionario,
            cargo_funcionario, situacao_funcionario}=req.body;
        const user = await Funcionario.findOneAndUpdate({_id}, data, {new:true});
        res.json(user);
    }

}