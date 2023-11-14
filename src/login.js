function loginUsuario() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginSenha = document.getElementById('loginSenha').value;

    // Recuperar a lista de usuários armazenada localmente
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se existe algum usuário com o e-mail fornecido
    const usuario = usuarios.find(user => user.cadastroEmail === loginEmail);

    if (usuario && usuario.cadastroSenha === loginSenha) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(usuario));  // Armazene o usuário atualmente logado
        // Login bem-sucedido, redirecionar para a página de usuário
        window.location.href = 'usuario.html';
    } else {
        // Exibir um alerta de erro em caso de falha no login
        alert("E-mail ou senha incorretos.");
    }
}

function gerarCodigoAleatorio() {
    return Math.floor(Math.random() * 10000);
}

function enviarCodigo() {
    const email = document.getElementById("senhaEmail").value;

    if (email.trim() === "") {
        alert("Por favor, preencha o campo de e-mail.");
        return;
    }

    const codigoAleatorio = gerarCodigoAleatorio();
    // Armazene o código aleatório em uma variável global para validação posterior
    window.codigoAleatorio = codigoAleatorio;
    alert("Código gerado: " + codigoAleatorio);
}

function validarCodigo() {
    const codigoInserido = document.getElementById("senhaCodigo").value;

    if (codigoInserido.trim() === "") {
        alert("Por favor, insira o código recebido por e-mail.");
        return;
    }

    if (parseInt(codigoInserido) === window.codigoAleatorio) {
        alert("Código válido!");
        window.location.href = "login.html?tipo=esqueceuSenhaNovaSenha";
    } else {
        alert("Código incorreto. Tente novamente.");
    }
}
function validarSenhas() {
    const novaSenha = document.getElementById("NovaSenha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (novaSenha === confirmarSenha) {
        // Senhas coincidem, então podemos atualizar a senha no objeto de usuário
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        usuario.cadastroSenha = novaSenha;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert("Senhas coincidem. Processo de recuperação concluído.");
        // Redirecionar para a página de login
        window.location.href = 'login.html';
    } else {
        alert("As senhas não coincidem. Por favor, tente novamente.");
    }
}