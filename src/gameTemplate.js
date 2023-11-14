document.addEventListener("DOMContentLoaded", function () {
    // Função para obter parâmetros da URL
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    
    function adicionarAListaDesejos() {
        // Obter informações dinâmicas do jogo
        const informacoesJogo = {
            nome: document.getElementById("jogoNome").innerText,
            sobre: document.getElementById("jogoSobre").innerText,
            categoria: document.getElementById("jogoCategoria").innerText,
            primeiraImagem: document.querySelector("#gamePics .carousel-item img")?.src || ''
        };
    
        if (isLoggedIn) {
            // Salvar informações do jogo na lista de desejos no armazenamento local
            const listaDesejos = JSON.parse(localStorage.getItem("listaDesejos")) || [];
            listaDesejos.push(informacoesJogo);
            localStorage.setItem("listaDesejos", JSON.stringify(listaDesejos));
    
            alert("Jogo adicionado à Lista de Desejos!");
        } else {
            // Se não estiver logado, redirecione para a página de login
            window.location.href = "login.html";
        }
    }

    // Adicionar ouvinte de eventos ao botão da lista de desejos
    const botaoListaDesejos = document.getElementById("botaoListaDesejos");
    botaoListaDesejos.addEventListener("click", adicionarAListaDesejos);

    // Obtenha o nome do jogo da URL
    const gameName = getParameterByName("gameName");

    // Use o nome do jogo para exibir informações correspondentes
    if (gameName === "Minecraft") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/Minecraft_logo.png";
            item.alt = "minecraftLogo";
        });
        document.getElementById("jogoNome").innerText = "Minecraft";
        document.getElementById("jogoPreco").innerText = "R$29,99";
        document.getElementById("jogoSobre").innerText = "Explore seu próprio mundo único, sobreviva à noite e crie qualquer coisa que você possa imaginar!";
        document.getElementById("jogoCategoria").innerText = "Sandbox | Sobrevivência | Recomendado";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "10+";
    } else if (gameName === "Valorant") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/Valorant_logo.webp";
            item.alt = "valorantLogo";
        });
        document.getElementById("jogoNome").innerText = "Valorant";
        document.getElementById("jogoPreco").innerText = "GRÁTIS";
        document.getElementById("jogoSobre").innerText = "Um jogo de tiro tático de heróis em primeira pessoa baseado em equipe que se passa em um futuro próximo.";
        document.getElementById("jogoCategoria").innerText = "FPS | Multiplayer | Recomendado";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "16+";
    } else if (gameName === "Fortnite") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/Fortnite_logo.avif";
            item.alt = "fortniteLogo";
        });
        document.getElementById("jogoNome").innerText = "Fortnite";
        document.getElementById("jogoPreco").innerText = "GRÁTIS";
        document.getElementById("jogoSobre").innerText = "Um jogo PVP de até 100 jogadores, permitindo jogar sozinho, em dupla ou em equipe.";
        document.getElementById("jogoCategoria").innerText = "Battle Royale | Multiplayer | Recomendado";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "13+";
    } else if (gameName === "CS:GO") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/CSGO_logo.png";
            item.alt = "CSGOLogo";
        });
        document.getElementById("jogoNome").innerText = "CS:GO";
        document.getElementById("jogoPreco").innerText = "GRÁTIS";
        document.getElementById("jogoSobre").innerText = "Um jogo de tiro tático em primeira pessoa com duas equipes, Terroristas e Contra-Terroristas.";
        document.getElementById("jogoCategoria").innerText = "FPS | Multiplayer | Recomendado";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "18+";
    } else if (gameName === "League of Legends") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/LOL_logo.jpg";
            item.alt = "LOLLogo";
        });
        document.getElementById("jogoNome").innerText = "League of Legends";
        document.getElementById("jogoPreco").innerText = "GRÁTIS";
        document.getElementById("jogoSobre").innerText = "Um jogo MOBA com duas equipes, cada equipe ocupando e defendendo sua metade do mapa.";
        document.getElementById("jogoCategoria").innerText = "Multiplayer | Recomendado";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "13+";
    } else if (gameName === "Call of Duty: Warzone") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/CODWarzone_logo.jpg";
            item.alt = "CODWarzoneLogo";
        });
        document.getElementById("jogoNome").innerText = "Call of Duty: Warzone";
        document.getElementById("jogoPreco").innerText = "GRÁTIS";
        document.getElementById("jogoSobre").innerText = "Um jogo PVP com uma enorme arena de combate que agora apresenta o novo mapa, Al Mazrah.";
        document.getElementById("jogoCategoria").innerText = "Battle Royale | FPS | Não Recomendado";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "18+";
    } else if (gameName === "Fifa 23") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/Fifa23_logo.jpeg";
            item.alt = "fifa23Logo";
        });
        document.getElementById("jogoNome").innerText = "Fifa 23";
        document.getElementById("jogoPreco").innerText = "R$59,99";
        document.getElementById("jogoSobre").innerText = "Um jogo de simulação de futebol com diversos modos de jogo: Modo Carreira, Ultimate Team, Pro Clubs e Volta Football.";
        document.getElementById("jogoCategoria").innerText = "Esporte | Simulação | Novidade";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "Livre";
    } else if (gameName === "GTA 5") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/GTA5_logo.jpg";
            item.alt = "gta5Logo";
        });
        document.getElementById("jogoNome").innerText = "GTA 5";
        document.getElementById("jogoPreco").innerText = "R$82,00";
        document.getElementById("jogoSobre").innerText = "Jogue como três criminosos do estado ficcional de San Andreas, seguindo seus esforços para realizarem assaltos sob a pressão de uma agência governamental.";
        document.getElementById("jogoCategoria").innerText = "Mundo Aberto | Ação | Novidade";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "18+";
    } else if (gameName === "Genshin Impact") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/GenshinImpact_logo.jpg";
            item.alt = "genshinImpactLogo";
        });
        document.getElementById("jogoNome").innerText = "Genshin Impact";
        document.getElementById("jogoPreco").innerText = "GRÁTIS";
        document.getElementById("jogoSobre").innerText = "Embarque na estrada para reencontrar seu parente de sangue, encontre companheiros com diferentes personalidades e habilidades únicas, e lute contra inimigos!";
        document.getElementById("jogoCategoria").innerText = "Mundo Aberto | Multiplayer | Novidade";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "12+";
    } else if (gameName === "Sonic Mania") {
        const carouselItems = document.querySelectorAll("#gamePics .carousel-item img");
        carouselItems.forEach(item => {
            item.src = "images/SonicMania_logo.jpg";
            item.alt = "sonicManiaLogo";
        });
        document.getElementById("jogoNome").innerText = "Sonic Mania";
        document.getElementById("jogoPreco").innerText = "R$19,99";
        document.getElementById("jogoSobre").innerText = "Sonic Mania traz as plataformas retrô de alta velocidade para o futuro usando gráficos 2D perfeitos, exibidos a 60 FPS!";
        document.getElementById("jogoCategoria").innerText = "Plataforma | Ação | Novidade";
        document.getElementById("jogoAvaliacao").innerText = "⭐⭐⭐⭐⭐";
        document.getElementById("jogoClassificacao").innerText = "Livre";
    }
});