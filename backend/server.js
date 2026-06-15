const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors()); // Libera o acesso para o JavaScript do frontend

// Configuração da conexão com o banco
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha_do_banco', // Cada um altera com a sua senha local no teste
    database: 'sistema_escolar'
});

//  ROTA DE LOGIN
app.post('/api/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Busca o aluno pelo e-mail informado
        const [linhas] = await pool.query('SELECT * FROM alunos WHERE email = ?', [email]);
        
        if (linhas.length === 0) {
            return res.status(401).json({ erro: "E-mail ou senha incorretos." });
        }

        const aluno = linhas[0];

        // Compara a senha com o hash do banco 
        // Se no início for testado com texto puro, mude para: if (senha !== aluno.senha_hash)
        const senhaValida = await bcrypt.compare(senha, aluno.senha_hash);
        if (!senhaValida) {
            return res.status(401).json({ erro: "E-mail ou senha incorretos." });
        }

        // Retorna os dados essenciais para o Frontend salvar
        res.json({ 
            mensagem: "Login realizado com sucesso!",
            alunoId: aluno.id,
            nome: aluno.nome
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro interno no servidor." });
    }
});

//  ROTA DA DASHBOARD (Dados calculados direto do Banco)
app.get('/api/dashboard/:id', async (req, res) => {
    const alunoId = req.params.id;

    try {
        // 1. Busca o nome do aluno
        const [alunoReq] = await pool.query('SELECT nome FROM alunos WHERE id = ?', [alunoId]);
        if (alunoReq.length === 0) return res.status(404).json({ erro: "Aluno não encontrado" });

        // 2. Calcula a Média Geral aritmética de todas as notas do aluno
        const [notasReq] = await pool.query('SELECT AVG(nota) as media FROM notas WHERE aluno_id = ?', [alunoId]);

        // 3. Calcula a Frequência  (Aulas presentes / Total de registros de chamada)
        const [freqReq] = await pool.query(`
            SELECT 
                (SUM(CASE WHEN presente = 1 THEN 1 ELSE 0 END) / COUNT(*)) * 100 as porcentagem 
            FROM frequencia WHERE aluno_id = ?`, [alunoId]);

        res.json({
            nome: alunoReq[0].nome,
            mediaGeral: parseFloat(notasReq[0].media || 0).toFixed(2),
            frequencia: parseFloat(freqReq[0].porcentagem || 0).toFixed(2)
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao buscar dados da dashboard." });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando com sucesso na porta ${PORT} 🚀`));
