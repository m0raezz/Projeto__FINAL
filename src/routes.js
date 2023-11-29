
/* RESPONSAVEL POR IMPORTAR O express */
import express from 'express';

/* RESPONSAVEL POR ATRIBUIR TODOS OS DADOS DO express PARA A CONSTANTE router */
const router = express.Router();


/* IMPORTANDO AS FUNÇÕES PREVIAMENTE CRIADAS */
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';


/* SETANDO ROTAS */
router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);

export { router as default};