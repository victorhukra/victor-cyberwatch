// script.js

// Simulação de crimes com mais informações
const crimes = [
    {
        user: "Player123",
        action: "Comentário suspeito",
        message: "Todos [grupo étnico] são inferiores!",
        ip: "192.168.1.10",
        type: "racismo",
        location: "São Paulo, Brasil",
        history: ["Comentário racista em um fórum de jogos (2023)", "Discurso de ódio em rede social (2022)"],
        socialMedia: ["Twitter: @player123", "Facebook: /player123"]
    },
    {
        user: "GamerX",
        action: "Comentário potencialmente ofensivo",
        message: "As mulheres não deveriam jogar!",
        ip: "192.168.1.11",
        type: "machismo",
        location: "Rio de Janeiro, Brasil",
        history: ["Ofensa misógina em chat de jogo (2023)"],
        socialMedia: ["Instagram: @gamerx", "Reddit: /u/GamerX"]
    },
    {
        user: "NoobMaster69",
        action: "Ameaça online",
        message: "Vou hackear seu PC, seu idiota!",
        ip: "192.168.1.12",
        type: "ameaca",
        location: "Brasília, Brasil",
        history: ["Ameaça de DDoS (2022)"],
        socialMedia: ["Discord: NoobMaster69#1234"]
    },
    {
        user: "XenoHater",
        action: "Comentário xenofóbico",
        message: "Imigrantes deviam ser expulsos!",
        ip: "192.168.1.13",
        type: "xenofobia",
        location: "Curitiba, Brasil",
        history: ["Comentário xenofóbico em fórum político (2023)"],
        socialMedia: ["Facebook: /xenohater"]
    },
    {
        user: "TrollKing",
        action: "Racismo em jogo",
        message: "Jogadores negros não sabem jogar!",
        ip: "192.168.1.14",
        type: "racismo",
        location: "Salvador, Brasil",
        history: ["Ofensa racial em grupo de jogo (2023)", "Discurso de ódio em blog pessoal (2021)"],
        socialMedia: ["Twitter: @trollking"]
    },
    {
        user: "MisogynyMaster",
        action: "Comentário machista",
        message: "Lugar de mulher não é no jogo!",
        ip: "192.168.1.15",
        type: "machismo",
        location: "Porto Alegre, Brasil",
        history: ["Misoginia em fórum de tecnologia (2023)", "Ofensas misóginas em redes sociais (2022)"],
        socialMedia: ["Instagram: @misogynymaster", "Twitter: @misogynymaster"]
    }
];

// Função para carregar atividades no log
function loadActivities(filter = "all") {
    const activityLog = document.getElementById("activityLog");
    activityLog.innerHTML = "";

    crimes.forEach((crime, index) => {
        if (filter === "all" || crime.type === filter) {
            const activityDiv = document.createElement("div");
            activityDiv.className = "activity";
            activityDiv.innerHTML = `
                <p><strong>Usuário:</strong> ${crime.user}</p>
                <p><strong>Ação:</strong> ${crime.action}</p>
                <p><strong>Mensagem:</strong> "${crime.message}"</p>
                <p><strong>Localização:</strong> ${crime.location}</p>
                <p><strong>IP:</strong> ${crime.ip}</p>
                <button onclick="investigate(${index})">Investigar</button>
            `;
            activityLog.appendChild(activityDiv);
        }
    });
}

// Função para filtrar atividades
function filterActivities() {
    const crimeType = document.getElementById("crimeType").value;
    loadActivities(crimeType);
}

// Função para investigar um crime
function investigate(index) {
    const detailsPanel = document.getElementById("detailsPanel");
    const crime = crimes[index];
    detailsPanel.innerHTML = `
        <h2>Detalhes da Investigação</h2>
        <p><strong>Usuário:</strong> ${crime.user}</p>
        <p><strong>Ação:</strong> ${crime.action}</p>
        <p><strong>Mensagem:</strong> "${crime.message}"</p>
        <p><strong>Localização:</strong> ${crime.location}</p>
        <p><strong>IP:</strong> ${crime.ip}</p>
        <p><strong>Histórico de Ofensas:</strong></p>
        <ul>
            ${crime.history.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>Redes Sociais:</strong></p>
        <ul>
            ${crime.socialMedia.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <p><strong>Status:</strong> Em andamento</p>
        <button onclick="closeCase(${index})">Encerrar Caso</button>
    `;
}

// Função para encerrar um caso
function closeCase(index) {
    crimes.splice(index, 1); // Remove o caso dos crimes
    filterActivities(); // Recarrega a lista de atividades com o filtro atual
    const detailsPanel = document.getElementById("detailsPanel");
    detailsPanel.innerHTML = `
        <h2>Detalhes da Investigação</h2>
        <p>O caso foi encerrado. Selecione outra atividade para visualizar.</p>
    `;
}

// Inicializa o painel com as atividades
loadActivities();

document.addEventListener('DOMContentLoaded', () => {
    const reportForm = document.getElementById('report-form');
    const reportCountElement = document.getElementById('report-count');
    let reportCount = 0;

    // Função para atualizar a contagem de denúncias
    const updateReportCount = () => {
        reportCountElement.textContent = reportCount;
    };

    // Evento de envio do formulário de denúncias
    reportForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obter dados do formulário
        const user = document.getElementById('report-user').value;
        const message = document.getElementById('report-message').value;
        const type = document.getElementById('report-type').value;

        // Exibir os dados da denúncia no console (para simulação)
        console.log(`Denúncia Recebida:
            Usuário: ${user}
            Mensagem: ${message}
            Tipo de Crime: ${type}
        `);

        // Incrementar a contagem de denúncias
        reportCount++;
        updateReportCount();

        // Limpar o formulário
        reportForm.reset();
    });

    // Inicializar a contagem de denúncias
    updateReportCount();
});

