function entrar() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.style.display = "block";

    if (!email.includes("@") || !email.includes(".")) {

        mensagem.innerHTML =
        "O email deve conter '@' e '.'";

        return;
    }

    let temMaiuscula = /[A-Z]/.test(senha);
    let temNumero = /[0-9]/.test(senha);
    let temEspecial = /[!@#$%^&*(),.?\":{}|<>]/.test(senha);
    let tamanhoValido = senha.length >= 8;

    if (
        !temMaiuscula ||
        !temNumero ||
        !temEspecial ||
        !tamanhoValido
    ) {

        mensagem.innerHTML =
        "<strong>Sua senha precisa ter:</strong><br>" +
        "• Pelo menos 8 caracteres<br>" +
        "• Uma letra maiúscula<br>" +
        "• Um número<br>" +
        "• Um caractere especial";

        return;
    }

    mensagem.innerHTML =
    "✅ Login válido!";

setTimeout(() => {
    window.location.href = "aluno.html";
}, 1000);

}

function mostrarDashboard(){

    document.getElementById("titulo").innerText =
    "Portal do Aluno";

    document.getElementById("conteudo-principal").innerHTML = `

        <h2>Bem-vindo, João Silva</h2>

        <div class="dashboard">

            <div class="card-dashboard">

                <h3>Média Geral</h3>

                <p>9.09</p>

            </div>

            <div class="card-dashboard">

                <h3>Frequência</h3>

                <p>92,86%</p>

            </div>

            <div class="card-dashboard">

                <h3>Matérias</h3>

                <p>7</p>

            </div>

            <div class="card-dashboard">

                <h3>Situação</h3>

                <p>Aprovado ✅</p>

            </div>

        </div>

        <h2 style="margin-top:30px;">
            Avisos da Escola
        </h2>

        <div class="avisos">

            <p>📢 Entrega dos boletins: 20/08</p>

            <p>📢 Feira de Ciências: 25/08</p>

            <p>📢 Reunião de responsáveis: 30/08</p>

        </div>

    `;
}

function mostrarDadosPessoais() {

    document.getElementById("titulo").innerText =
    "Dados Pessoais";

    document.getElementById("conteudo-principal").innerHTML = `

        <h2>Informações do Aluno</h2>

        <table>

            <tr>
                <th>Campo</th>
                <th>Informação</th>
            </tr>

            <tr>
                <td>Nome</td>
                <td>João Silva</td>
            </tr>

            <tr>
                <td>CPF</td>
                <td>123.456.789-00</td>
            </tr>

            <tr>
                <td>RG</td>
                <td>12.345.678-9</td>
            </tr>

            <tr>
                <td>Data de Nascimento</td>
                <td>20/05/2000</td>
            </tr>

            <tr>
                <td>Responsável 1</td>
                <td>Maria Silva</td>
            </tr>

            <tr>
                <td>Responsável 2</td>
                <td>Paulo Silva</td>
            </tr>

            <tr>
                <td>Telefone</td>
                <td>(21) 99999-9999</td>
            </tr>

        </table>

        <br>

        <h2>Endereço</h2>

        <table>

            <tr>
                <th>Campo</th>
                <th>Informação</th>
            </tr>

            <tr>
                <td>Rua</td>
                <td>Rua das Flores</td>
            </tr>

            <tr>
                <td>Número</td>
                <td>123</td>
            </tr>

            <tr>
                <td>CEP</td>
                <td>20.000-000</td>
            </tr>

            <tr>
                <td>Bairro</td>
                <td>Centro</td>
            </tr>

            <tr>
                <td>Cidade</td>
                <td>Rio de Janeiro</td>
            </tr>

            <tr>
                <td>País</td>
                <td>Brasil</td>
            </tr>

        </table>

    `;
}
function mostrarMaterias() {

    document.getElementById("titulo").innerText =
    "Matérias";

    document.getElementById("conteudo-principal").innerHTML = `

        <table>

            <tr>
                <th>Código</th>
                <th>Matéria</th>
                <th>Professor</th>
            </tr>

            <tr>
                <td>MAT001</td>
                <td>Matemática</td>
                <td>Ana Souza</td>
            </tr>

            <tr>
                <td>POR001</td>
                <td>Português</td>
                <td>Carlos Lima</td>
            </tr>

            <tr>
                <td>HIS001</td>
                <td>História</td>
                <td>Fernanda Rocha</td>
            </tr>

            <tr>
                <td>GEO001</td>
                <td>Geografia</td>
                <td>Ricardo Alves</td>
            </tr>

            <tr>
                <td>BIO001</td>
                <td>Biologia</td>
                <td>Juliana Costa</td>
            </tr>

            <tr>
                <td>FIS001</td>
                <td>Física</td>
                <td>Marcos Pereira</td>
            </tr>

            <tr>
                <td>QUI001</td>
                <td>Química</td>
                <td>Patrícia Martins</td>
            </tr>

        </table>

    `;
}
function mostrarNotas() {

    document.getElementById("titulo").innerText =
    "Situação Curricular";

    document.getElementById("conteudo-principal").innerHTML = `

        <table>

            <tr>
                <th>Matéria</th>
                <th>Nota</th>
                <th>Frequência</th>
            </tr>
            <tr>
                <td>Matemática</td>
                <td>9.5</td>
                <td>95%</td>
            </tr>
            <tr>
                <td>Português</td>
                <td>8.7</td>
                <td>97%</td>
            </tr>
            <tr>
                <td>História</td>
                <td>8.5</td>
                <td>80%</td>
            </tr>
            <tr>
                <td>Geografia</td>
                <td>10</td>
                <td>95%</td>
            </tr>
            <tr>
                <td>Biologia</td>
                <td>9.9</td>
                <td>97%</td>
            </tr>
            <tr>
                <td>Física</td>
                <td>9.0</td>
                <td>100%</td>
            </tr>
            <tr>
                <td>Química</td>
                <td>8.0</td>
                <td>86%</td>
            </tr>


        </table>

    `;
}

function mostrarHistorico() {

    document.getElementById("titulo").innerText =
    "Histórico Escolar";

    document.getElementById("conteudo-principal").innerHTML = `

        <div class="ano-card"
             onclick="mostrarAno(2023)">
            📚 Ano Letivo 2023
        </div>

        <div class="ano-card"
             onclick="mostrarAno(2024)">
            📚 Ano Letivo 2024
        </div>

        <div class="ano-card"
             onclick="mostrarAno(2025)">
            📚 Ano Letivo 2025
        </div>

        <div id="detalhes-ano">

            <p>
                Selecione um ano para visualizar o histórico.
            </p>

        </div>

    `;
}

function mostrarAno(ano){

    let detalhes =
    document.getElementById("detalhes-ano");

    if(ano === 2023){

        detalhes.innerHTML = `

            <h3>2023</h3>

            <p><strong>Frequência:</strong> 92%</p>

            <table>

                <tr>
                    <th>Matéria</th>
                    <th>Nota</th>
                </tr>

                <tr>
                    <td>Matemática</td>
                    <td>8.5</td>
                </tr>

                <tr>
                    <td>Português</td>
                    <td>9.0</td>
                </tr>

                <tr>
                    <td>História</td>
                    <td>8.8</td>
                </tr>
                
                <tr>
                    <td>Geografia</td>
                    <td>8.0</td>
                </tr>
                
                <tr>
                    <td>Biologia</td>
                    <td>10.0</td>
                </tr>

                <tr>
                    <td>Física</td>
                    <td>9.8</td>
                </tr>

                <tr>
                    <td>Química</td>
                    <td>10</td>
                </tr>


            </table>

        `;
    }

    else if(ano === 2024){

        detalhes.innerHTML = `

            <h3>2024</h3>

            <p><strong>Frequência:</strong> 95%</p>

            <table>

                <tr>
                    <th>Matéria</th>
                    <th>Nota</th>
                </tr>

                <tr>
                    <td>Matemática</td>
                    <td>9.2</td>
                </tr>

                <tr>
                    <td>Português</td>
                    <td>8.9</td>
                </tr>

                <tr>
                    <td>História</td>
                    <td>9.9</td>
                </tr>
                
                <tr>
                    <td>Geografia</td>
                    <td>10</td>
                </tr>

                <tr>
                    <td>Biologia</td>
                    <td>9.5</td>
                </tr>

                <tr>
                    <td>Física</td>
                    <td>8.6</td>
                </tr>

                <tr>
                    <td>Química</td>
                    <td>8.0</td>
                </tr>

            </table>

        `;
    }

    else if(ano === 2025){

        detalhes.innerHTML = `

            <h3>2025</h3>

            <p><strong>Frequência:</strong> 97%</p>

            <table>

                <tr>
                    <th>Matéria</th>
                    <th>Nota</th>
                </tr>

                <tr>
                    <td>Matemática</td>
                    <td>9.7</td>
                </tr>

                <tr>
                    <td>Português</td>
                    <td>9.4</td>
                </tr>

                <tr>
                    <td>História</td>
                    <td>9.5</td>
                </tr>

                <tr>
                    <td>Geografia</td>
                    <td>9.0</td>
                </tr>

                <tr>
                    <td>Biologia</td>
                    <td>10.0</td>
                </tr>

                <tr>
                    <td>Física</td>
                    <td>9.6</td>
                </tr>

                <tr>
                    <td>Química</td>
                    <td>9.0</td>
                </tr>

            </table>

        `;
    }

}

function sair(){

    document.getElementById("modal-sair")
    .style.display = "flex";

}

function fecharModal(){

    document.getElementById("modal-sair")
    .style.display = "none";

}

function confirmarSaida(){

    window.location.href = "index.html";

}