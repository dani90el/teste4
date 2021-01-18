const Fornecedor = require('../models/fornecedor.model');
const {checout} = require('../routes');

module.exports = {
    async index(req,res){
        const prod = await Produto.find();
        res.json(prod);
    },
    async create(req,res){
        const {nome_fornecedor,
        nomefantasia_fornecedor,
        cnpj_fornecedor} = req.body;
    let data ={};
    let produto = await Produto.findOne({_id});
    if(!produto){
        data = {nome_fornecedor, nomefantasia_fornecedor, cnpj_fornecedor};
        produto = await Produto.create(data);
        return res.status(200).json(user);
    }else{
        return res.status(500).json(user);
    }
    },
    async details(req, res){
        const {_id} = req.params;
        const user = await Produto.findOne({_id});
        return res.json(user);
    },
    async delete(req, res){
        const {_id} = req.params;
        const prod = await Produto.findByIdAndDelete({_id});
        return res.json(prod);
    },
    async update(req, res){
        const {_id, nome_fornecedor, nomefantasia_fornecedor, cnpj_fornecedor} = req.body;
        const data = await Produto.findOneAndUpdate({_id},data, {new: true});
        res.json(data);
    }
}