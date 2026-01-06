import dietasData from "../data/dieta.js";

const container = document.getElementById("cards3");

dietasData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = item.id;


    card.innerHTML = `
    <div class="card-icon" id="${item.id}">${item.icone}</div>
    <h3>${item.titulo}</h3>
    <p>${item.descricao}</p>
    <p><strong>Pontos importantes:</strong> ${item.pontos.join(", ")}</p>
`;

    container.appendChild(card);
});