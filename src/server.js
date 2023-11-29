/* ARQUIVO CRIADO PARA SETAR O SERVIDOR */


/* IMPORTANDO O express, cors E O routes */
import express from 'express';
import cors from 'cors';
import routes from './routes.js';



/* CRIANÇÃO E CONFIGURAÇÃO DO SERVIDOR */
const server = express();  
server.use(cors());                                     /* ADICIONANDO O CORS AO SERVIDOR */
server.use(express.urlencoded({extended:true}));        /* ADICIONANDO E CONFIGURANDO O EXPRESS AO SERVIDOR */

server.use('/api', routes);                             /* ADICIONANDO O ROUTES E CONFIGURA SUA ROTA PADRÃO */

server.listen(3000, () => {                             /* SELECIONA EM QUAL PORTA O SERVIDOR DEVE SER ABERTO */
    console.log(`Servidor rodando em http://localhost:3000`);
})
