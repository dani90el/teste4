const express = require('express');
const routes = express.Router();

// Quem participa do CRUD
const Produto = require('./controllers/produto.controller');
const Fornecedor = require('./controllers/fornecedor.controller');
const Funcionario = require('./controllers/funcionario.controller');
const Cliente = require('./controllers/cliente.controller');

routes.get('/',Produto.index);

// Rotas do Produto
routes.post('/api/produto',Produto.create);
routes.get('/api/produto',Produto.index);
routes.get('/api/produto.details/:_id',Produto.details);
routes.delete('/api/produto/:_id',Produto.delete);
routes.put('/api/produto', Produto.update);

// Rotas do Fornecedor
routes.post('api/fornecedor', Fornecedor.create);
routes.get('api/fornecedor', Fornecedor.index);
routes.get('api/fornecedor.details/:_id', Fornecedor.details);
routes.delete('api/fornecedor/:_id', Fornecedor.delete);
routes.put('api/fornecedor/:_id', Fornecedor.update);

// Rotas do Funcionarios
routes.post('api/funcionario', Funcionario.create);
routes.get('api/funcionario', Funcionario.index);
routes.get('api/funcionario.details/:_id', Funcionario.details);
routes.delete('api/funcionario/:_id', Funcionario.delete);
routes.put('api/funcionario', Funcionario.update);

// Rotas do Cliente
routes.post('api/cliente', Cliente.create);
routes.get('api/cliente', Cliente.index);
routes.get('api/cliente.details/:_id', Cliente.details);
routes.delete('api/cliente/:_id', Cliente.delete);
routes.put('api/cliente', Cliente.update);


module.exports = routes;
