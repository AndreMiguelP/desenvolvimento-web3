const express  = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

// define suas rotas aqui
app.get('/api/mensagem', (req, res )=> {
    res.json({ texto: "ola do servidor"});
});

app.get('/cep/:cep', async (req, res) => {
    const {cep} = req.params;
    
    try {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = resposta.data;
        
        res.status(200).json(dados);
    } catch (err) {
        res.status(500).json({ erro: 'Erro de comunicaçãp com viaceo' });
    } 
});

app.listen(3001);

// no terminal tem que colocar 
// npm init 
// npm i        
// npm i express
// npm i cors 
// npm i nodemon
// npm run start 
// p acessar no google http://localhost:3000/api/mensagem