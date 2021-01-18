const Cliente = require('../models/cliente.model');
const { checkout} = require('../routes');

module.exports = {
    async index(req, res) {
        const data = await Cliente.find();
        res.json(data);
    },
    async create(req, res) {
        const { cpf_cliente, nome_cliente, datanascimento_cliente,
            email_cliente, senha_cliente } = req.body;
        let data = {};
        let usu = await Cliente.findOne({ login_usuario });

        if (!usu) {
            data = { cpf_cliente, nome_cliente, datanascimento_cliente, email_cliente, senha_cliente };
            user = await Cliente.create(data);
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const user = await Cliente.findOne({ _id });
        return res.json(user);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const user = await Cliente.findByIdAndDelete({ _id });
        return res.json(user);
    },
    async update(req, res) {
        const { _id, cpf_cliente, nome_cliente, datanascimento_cliente,
             email_cliente, senha_cliente }=req.body;
        const user = await Cliente.findOneAndUpdate({ _id }, data, { new: true });
        res.json(user);
    },
    async login(req, res) {
        const { login_cliente, senha_cliente } = req.body;
        Cliente.findOne({ login_cliente: login }, function (err, user) {
            if (err) {
                console.log(err);
                res.status(200).json({ erro: "Erro no servidor. Por favor, tente novamente!" });
            } else if (!user) {
                res.status(200).json({ status: 2, err: "Login não encontrado!" });
            } else {
                use.isCorrectPassword(senha, async function (err, same) {
                    if (err) {
                        res.status(200).json({ error: "Erro no servidor. Por favor, tente novamente!" });
                    } else if (!same) {
                        res.status(200).json({ status: 2, error: "A senha não confere!" });
                    } else {
                        const payload = { login_cliente };
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '24h'
                        });
                        res.cookie('token', token, { httpOnly: true });
                        // res.status(200).json({status:1, auth: true, token: token:})
                    }
                })
            }
        })
    },
    async checktoken(req, res) {
        const token = req.body.token || req.query.token || req.cookie.token || req.query.token ||
            req.headers['x-access-token'];
        if (!token) {
            res.json({ status: 401, msg: "Não autorizado: Token inexistente!" });
        } else {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    res.json({ status: 401, msg: 'Não autorizado: Token inválido!' });
                } else {
                    res.json({ status: 200 });
                }
            })
        }
    },
    async destroyToken(req, res) {
        const token = req.headers.token;
        if (token) {
            res.cookie('token', null, { httpOnly: true });
        } else {
            res.status(401).send("Logout não autorizado!");
        }
        res.send("Sessão finalizada com sucesso!");
    }
}