const Produto = require('../models/produto.model');
const { checkout } = require('../routes');
module.exports = {

    // Consultar todos os produtos
    async index(req, res) {
        const produto = await Produto.find();
        res.json(produto)
    },
    async create(req, res) {
        const { codigobarras_produto, nome_produto, tipo_produto, descricao_produto, preco_produto,
            quantidade_produto } = req.body;
        let data = {};
        let produto = await Produto.findOne(codigobarras_produto);
        if (!produto) {
            // Caso não exista no banco, ele cria
            produto = await Produto.create(data);
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const prod = await Produto.findOne({ _id });
        res.json(prod);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const prod = await Produto.findByIdAndDelete({ _id });
        return res.json(prod);
    },
    async update(req, res) {
        const data = {
            _id, codigobarras_produto, nome_produto, tipo_produto, descricao_produto, preco_produto,
            quantidade_produto
        };
        const prod = await Produto.findOneAndUpdate({ _id }, data, { new: true });
        res.json(user);
    }
}