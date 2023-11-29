

/* RESPONSAVEL POR IMPORTAR O mysql2 */
import mysql from 'mysql2';


/* RESPONSAVEL POR FAZER A CONEXÃO COM O BANCO DE DADOS */
const connection = mysql.createConnection({
    host: 'localhost',      /* Local onde será hosteado */
    user: 'root',           /* O usuario para acessar o banco */
    password: 'Admin@123',  /* Senha para acessar o banco (caso o banco não tenho senha esse local deve estar em branco) */
    database: 'lojadb'      /* Nome do banco de dados */
});


/* RESPONSAVEL POR FAZER A VERIFICAÇÃO SE A CONEXÃO COM O BANCO FOI FEITA COM SUCESSO */
connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});

export default connection;