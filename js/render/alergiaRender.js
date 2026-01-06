import alergiasData from "../data/alergia.js";

const container = document.getElementById("cards4");

alergiasData.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.id = item.id;

  card.innerHTML = `
    <div class="card-icon" id="${item.id}">${item.icone}</div>
    <h3>${item.titulo}</h3>
    <p>${item.descricao}</p>
    <p><strong>Sintomas comuns:</strong> ${item.sintomas.join(", ")}</p>
`;

  container.appendChild(card);
});