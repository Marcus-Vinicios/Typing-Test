const text = document.querySelector("#text");
const input = document.querySelector("#input");
const restart = document.querySelector("#restart");
const result = document.querySelector("#result");
const historic = document.querySelector("#historic");
const changeThemeBtn = document.querySelector("#changeTheme");

const texts = [
    'Reason',
    'Time',
    'Closing',
    'Rules',
    'Presentation',
    'Participants',
    'Vacations',
    'Appoint',
    'Make',
    'Send',
    'Type',
    'Everyone',
    'People',
    'Email',
    'Letter',
    'Computer',
    'Venue',
    'Place',
    'Typing',
    'Request',
    'Response',
    'Querry',
    'Person',
    'Bottom',
    'Button',
    'Home',
    'Style',
    'Column',
    'Display',
    'Change',
    'Pencil',
    'Eraser',
    'Brush',
    'Sweet',
    'Suit',
    'A rede de telefonia celular é uma rede de telecomunicações projectada para o provisionamento de serviços de telefonia móvel, ou seja, para a comunicação entre uma ou mais estações móveis (telefone celular no Brasil ou telemóvel em Portugal). Um telefone celular ou telemóvel é um aparelho de comunicação por ondas electromagnéticas que permite a transmissão bidireccional de voz e dados utilizáveis em uma área geográfica que se encontra dividida em células (de onde provêm a nomenclatura celular), cada uma delas servida por um transmissor/receptor. Há diferentes tecnologias para a difusão das ondas electromagnéticas nos telefones celulares, baseadas na compressão das informações.',
    'Sudoku, por vezes escrito Su Doku, é um quebra-cabeças baseado na colocação lógica de números. O objectivo do jogo é a colocação de números de 1 a 9 em cada uma das células vazias numa grade de 9x9, constituída por 3x3 subgrades chamadas regiões. Algumas células já contêm números, chamadas como números dados. O objectivo é preencher as células vazias, com um número em cada célula, de maneira que cada coluna, linha e região contenham os números 1-9 apenas uma vez. Portanto, na solução do jogo, cada número aparece apenas uma vez em qualquer um dos sentido ou regiões, daí portanto "únicos números" originaram o nome do jogo ou enigma. Resolver o jogo requer apenas raciocínio lógico e algum tempo.',
    'A área das Cataratas do Iguaçu são um conjunto majestoso de cerca de 275 quedas de água no Rio Iguaçu (na Bacia Hidrográfica do Rio Paraná), localizam entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e no Parque Nacional Iguaçu, Missiones, na Argentina. A área total de ambos parques nacionais, correspondem a 250 mil hectares de floresta subtropical e declarada como Patrimônio Natural da Humanidade. O Parque Nacional argentino foi criado em 1934; e o Parque Nacional brasileiro, em 1939, com o propósito de administrar e proteger o manancial de água que representa essa catarata e o conjunto do meio ambiente ao seu redor. Os parques tanto brasileiro como argentino são considerados Patrimônio da Humanidade.',
    'A música constitui-se basicamente de uma sucessão de sons e silêncio organizada ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Actualmente não se conhece nenhuma civilização ou agrupamento que não possua manifestações musicais próprias. Embora nem sempre seja feita com esse objectivo, a música pode ser considerada como uma forma de arte, considerada por muitos como sua principal função. Há evidências de que a música é conhecida e praticada desde a pré-história. Provavelmente a observação dos sons da natureza tenha despertado no homem, através do sentido auditivo, a necessidade ou vontade de uma actividade que se baseasse na organização de sons.',
    'O cubo de Rubik (ou também chamado o cubo mágico) é um quebra-cabeças tridimensional. O Cubo de Rubik é um cubo geralmente confeccionado em plástico e possui várias versões, sendo a versão 3x3x3 a mais comum, composta por 54 faces e 6 cores diferentes, com arestas de aproximadamente 5,5 cm. É considerado um dos brinquedos mais populares do mundo, atingindo um total de 900 milhões de unidades vendidas, bem como suas diferentes imitações. O cubo de Rubik possui 43 triliões de combinações possíveis diferentes. Se alguém pudesse realizar todas as combinações possíveis a uma velocidade de 10 por segundo, demoraria 136.000 anos, supondo que nunca repetisse a mesma combinação.',
    'O termo Mudança do Clima refere-se à variação do clima global ou dos climas regionais da Terra ao longo do tempo. Estas variações dizem respeito a mudanças de temperatura, precipitação, nebulosidade e outros fenómenos climáticos em relação às médias históricas. Estas alterações podem ser causadas por processos internos ao sistema Terra-atmosfera, por forças externas (como, por exemplo, variações na actividade solar) ou, mais recentemente, pelo resultado da actividade humana. Portanto, entende-se que a mudança climática pode ser tanto um efeito de processos naturais ou decorrentes da acção humana e por isso deve-se ter em mente que tipo de mudança climática se está referindo.',
    "Atrás da casa, havia um bosque de pinheiros. Era logo depois do terreirão de café e podia vê-los abrindo a janela do meu quarto. Com o luar ficavam todos meio iluminados. Em frente à casa, porém, existia aquele isolado. Sempre o amei mais do que os outros. Creio que os pavões, também, porque costumavam pairar a seu pé, atraídos por sua beleza. Se chovia, virava um pinheiro de Natal, pois as gotas d'água o guarneciam com minúsculas bolas prateadas. Uma leve brisa fazia com que se movesse suavemente. À luz da Lua, deixava de ser real. Era pouco sonho. Estava nele contida a minha visão do mundo. Quando deixei a casa, nunca mais o vi. Lembro-me dele como uma coisa viva. E dói esse lembrar.",
    "A amizade é como um muro de concreto que protege a casa à beira-mar. As ondas vão e voltam, batendo ora suave, ora violentamente contra ele; vem o sol, vem a chuva, vem o vento, e o muro está sempre ali, forte, inabalável diante dos elementos, disposto a sacrifícios, humilhações e esquecimentos. Graças a ele, a casa permanece tranqüila e serena, dominando altiva o rochedo. Assim é a amizade. Quando contamos com ela, somos como a casa protegida. Sabemos que existe uma barreira entre nós e os ataques de inveja, as calúnias do ódio e as mentiras de ingratidão.",
];

function newText() {
    const index = Math.floor(Math.random() * texts.length);
    text.textContent = texts[index];
}

function updateTest() {
    start();

    if (input.value === text.textContent) {
        verify();
    }
}

function start() {
    const testStats = JSON.parse(localStorage.getItem("testInProgress"));

    if (!testStats) {
        localStorage.setItem("initialTime", new Date().getTime());
        localStorage.setItem("testInProgress", true);
    }
}

function verify() {
    const finalTime = new Date().getTime()
    const initialTime = parseInt(localStorage.getItem("initialTime"))
    const spentTime = (finalTime - initialTime) / 1000

    result.textContent = `Parabéns! Você levou ${spentTime.toFixed(1)} segundos!`

    addHistoric(text.textContent, spentTime)

    localStorage.setItem("testInProgress", false)
    input.value = ""

    newText()
}

function addHistoric(inputText, spentTime) {
    const historicItem = document.createElement("p");

    historicItem.textContent = `Texto "${inputText}" - Tempo: ${spentTime.toFixed(1)} segundos`;

    historic.appendChild(historicItem)
}

function restartTest() {
    input.value = "";
    result.textContent = "";
    newText();
    localStorage.setItem("testInProgress", false);
    historic.innerHTML = "";
}

function changeTheme() {
    const body = document.body;

    body.classList.toggle('light');
    body.classList.toggle('dark');
}

input.addEventListener("keyup", updateTest);
restart.addEventListener("click", restartTest);
changeThemeBtn.addEventListener("click", changeTheme)

newText();