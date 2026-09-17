const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Que tipo de filme você prefere assistir?",
        alternativas: [
            {
                texto: "🚀 Ficção científica e aventura",
                filme: "interestelar"
            },
            {
                texto: "🦸 Ação e super-heróis",
                filme: "vingadores"
            },
            {
                texto: "😂 Comédia",
                filme: "as_ferias"
            },
            {
                texto: "💔 Romance e drama",
                filme: "diario"
            }
        ]
    },

    {
        enunciado: "Qual cenário parece mais interessante?",
        alternativas: [
            {
                texto: "🌌 O espaço e outros planetas",
                filme: "interestelar"
            },
            {
                texto: "🏙️ Uma cidade cheia de perigos",
                filme: "vingadores"
            },
            {
                texto: "🏖️ Uma viagem inesquecível",
                filme: "as_ferias"
            },
            {
                texto: "🏡 Uma cidade pequena e tranquila",
                filme: "diario"
            }
        ]
    },

    {
        enunciado: "O que você gostaria de sentir durante o filme?",
        alternativas: [
            {
                texto: "🤯 Ficar pensando sobre o universo",
                filme: "interestelar"
            },
            {
                texto: "🔥 Sentir muita adrenalina",
                filme: "vingadores"
            },
            {
                texto: "🤣 Dar muitas risadas",
                filme: "as_ferias"
            },
            {
                texto: "❤️ Me emocionar com uma história de amor",
                filme: "diario"
            }
        ]
    }
];

const filmes = {

    interestelar: {
        titulo: "Interestelar",
        sinopse: "Em um futuro em que a Terra enfrenta graves problemas ambientais, um grupo de astronautas parte em uma missão através de um buraco de minhoca em busca de um novo planeta que possa abrigar a humanidade. A jornada envolve descobertas científicas, escolhas difíceis e uma relação profunda entre pais e filhos."
    },

    vingadores: {
        titulo: "Os Vingadores",
        sinopse: "Quando uma ameaça poderosa coloca a Terra em perigo, um grupo de heróis precisa deixar suas diferenças de lado e trabalhar em equipe. Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro unem forças para enfrentar um inimigo que pretende dominar o planeta."
    },

    as_ferias: {
        titulo: "As Férias",
        sinopse: "Uma família decide fazer uma viagem que deveria ser tranquila e divertida. Porém, uma série de situações inesperadas transforma o passeio em uma verdadeira aventura cheia de confusões, momentos engraçados e acontecimentos que ninguém poderia imaginar."
    },

    diario: {
        titulo: "Diário de uma Paixão",
        sinopse: "Em uma cidade tranquila, dois jovens de origens diferentes se apaixonam durante um verão. Apesar das dificuldades e das decisões tomadas ao longo dos anos, a história mostra como algumas relações podem permanecer importantes mesmo diante da passagem do tempo."
    }

};

let atual = 0;
let escolhas = {};

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {

    const filmeEscolhido = opcaoSelecionada.filme;

    if (escolhas[filmeEscolhido]) {
        escolhas[filmeEscolhido]++;
    } else {
        escolhas[filmeEscolhido] = 1;
    }

    atual++;

    mostraPergunta();
}

function mostraResultado() {

    let filmeFinal = "interestelar";
    let maiorPontuacao = 0;

    for (const filme in escolhas) {

        if (escolhas[filme] > maiorPontuacao) {
            maiorPontuacao = escolhas[filme];
            filmeFinal = filme;
        }
    }

    const resultado = filmes[filmeFinal];

    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    tituloResultado.textContent = `🎬 ${resultado.titulo}`;

    textoResultado.textContent = resultado.sinopse;
}

function reiniciar() {

    atual = 0;
    escolhas = {};

    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";

    caixaResultado.style.display = "none";

    mostraPergunta();
}

mostraPergunta();
