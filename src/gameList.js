var isLoggedIn;

function preencher_template(titulo, descricao, categoria, imagem_url, icon_url, preco) {
    var template = `
    <div style="text-align: center; width: 374px;">
        <div class="gameCard">
          <img src="${imagem_url}" class="gameImg" alt="">
          <div>
            <h5 class="gameTitle">${titulo}</h5>
            <p class="gameText">${descricao}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style="background: #D6DAD6;"><img class="categoryImg"
                src="${icon_url}"><b> ${categoria}</b></li>
            <li class="list-group-item" style="background: #D6DAD6;"><b>${preco}</b></li>
          </ul>
        </div>
        <button type="button" class="btn btn-lg btn-success" onclick="redirectToGamePage(this, '${titulo}')"><i class="bi bi-cart-plus"></i> Comprar</button>
    </div>
    `;
    return template;
}

function redirectToGamePage(button, gameTitle) {
    let gameName;

    // Determine o nome do jogo com base no título
    if (gameTitle.includes("Minecraft")) {
        gameName = "Minecraft";
    } else if (gameTitle.includes("Valorant")) {
        gameName = "Valorant";
    } else if (gameTitle.includes("Fortnite")) {
        gameName = "Fortnite";
    } else if (gameTitle.includes("CS:GO")) {
        gameName = "CS:GO";
    } else if (gameTitle.includes("League of Legends")) {
        gameName = "League of Legends";
    } else if (gameTitle.includes("Call of Duty: Warzone")) {
        gameName = "Call of Duty: Warzone";
    }

    if (gameName) {
        // Construa a URL com os parâmetros necessários
        const url = `game.html?gameName=${encodeURIComponent(gameName)}`;
        // Redirecione para a página game.html com os parâmetros
        window.location.href = url;
    }
}

var dadosItens = [
    {
        titulo: "Minecraft",
        descricao: "Explore seu próprio mundo único, sobreviva à noite e crie qualquer coisa que você possa imaginar!",
        categoria: "Sandbox",
        categoria2: ["Sandbox", "Sobrevivência", "Recomendado"],
        imagem_url: "images/Minecraft_logo.png",
        icon_url: "images/Sandbox_icon.png",
        preco: "R$29,99"
    },
    {
        titulo: "Valorant",
        descricao: "Um jogo de tiro tático de heróis em primeira pessoa baseado em equipe que se passa em um futuro próximo.",
        categoria: "FPS",
        categoria2: ["FPS", "Multiplayer", "Recomendado"],
        imagem_url: "images/Valorant_logo.webp",
        icon_url: "images/FPS_icon.png",
        preco: "GRÁTIS"
    },
    {
        titulo: "Fortnite",
        descricao: "Um jogo PVP de até 100 jogadores, permitindo jogar sozinho, em dupla ou em equipe.",
        categoria: "Battle Royale",
        categoria2: ["Battle Royale", "Multiplayer", "Recomendado"],
        imagem_url: "images/Fortnite_logo.avif",
        icon_url: "images/BattleRoyale_icon.png",
        preco: "GRÁTIS"
    },
    {
        titulo: "CS:GO",
        descricao: "Um jogo de tiro tático em primeira pessoa com duas equipes, Terroristas e Contra-Terroristas.",
        categoria: "Battle Royale",
        categoria2: ["FPS", "Multiplayer", "Recomendado"],
        imagem_url: "images/CSGO_logo.png",
        icon_url: "images/FPS_icon.png",
        preco: "GRÁTIS"
    },
    {
        titulo: "League of Legends",
        descricao: "Um jogo MOBA com duas equipes, cada equipe ocupando e defendendo sua metade do mapa.",
        categoria: "Multiplayer",
        categoria2: ["Multiplayer", "Recomendado"],
        imagem_url: "images/LOL_logo.jpg",
        icon_url: "images/Multiplayer_icon.png",
        preco: "GRÁTIS"
    },
    {
        titulo: "Call of Duty: Warzone",
        descricao: "Um jogo PVP com uma enorme arena de combate que agora apresenta o novo mapa, Al Mazrah.",
        categoria: "Battle Royale",
        categoria2: ["Battle Royale", "FPS", "Não Recomendado"],
        imagem_url: "images/CODWarzone_logo.jpg",
        icon_url: "images/BattleRoyale_icon.png",
        preco: "GRÁTIS"
    },
    {
        titulo: "Fifa 23",
        descricao: "Um jogo de simulação de futebol com diversos modos de jogo: Modo Carreira, Ultimate Team, Pro Clubs e Volta Football.",
        categoria: "Esporte",
        categoria2: ["Esporte", "Simulação", "Novidade"],
        imagem_url: "images/Fifa23_logo.jpeg",
        icon_url: "images/Esporte_icon.png",
        preco: "R$59,99"
    },
    {
        titulo: "GTA 5",
        descricao: "Jogue como três criminosos do estado ficcional de San Andreas, seguindo seus esforços para realizarem assaltos sob a pressão de uma agência governamental.",
        categoria: "Mundo Aberto",
        categoria2: ["Mundo Aberto", "Ação", "Novidade"],
        imagem_url: "images/GTA5_logo.jpg",
        icon_url: "images/MundoAberto_icon.png",
        preco: "R$82,00"
    },
    {
        titulo: "Genshin Impact",
        descricao: "Embarque na estrada para reencontrar seu parente de sangue, encontre companheiros com diferentes personalidades e habilidades únicas, e lute contra inimigos!",
        categoria: "Mundo Aberto",
        categoria2: ["Mundo Aberto", "Multiplayer", "Novidade"],
        imagem_url: "images/GenshinImpact_logo.jpg",
        icon_url: "images/MundoAberto_icon.png",
        preco: "GRÁTIS"
    },
    {
        titulo: "Sonic Mania",
        descricao: "Sonic Mania traz as plataformas retrô de alta velocidade para o futuro usando gráficos 2D perfeitos, exibidos a 60 FPS!",
        categoria: "Plataforma",
        categoria2: ["Plataforma", "Ação", "Novidade"],
        imagem_url: "images/SonicMania_logo.jpg",
        icon_url: "images/Plataforma_icon.png",
        preco: "R$19,99"
    },
];
// Armazenar os dados em Local Storage
localStorage.setItem('dadosItens', JSON.stringify(dadosItens));