import dietasData from "../data/dieta.js";

const container = document.getElementById("cards3");

dietasData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.id = item.id;

    const hash = window.location.hash.replace("#", "");

    if (hash && item.id === hash) {
        card.classList.add("highlight");

        // opcional: rolagem suave até o card
        setTimeout(() => {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
    }

    card.innerHTML = `
    <div class="card-icon" id="${item.id}">${item.icone}</div>
    <h3>${item.titulo}</h3>
    <p>${item.descricao}</p>
    <p><strong>Pontos importantes:</strong> ${item.pontos.join(", ")}</p>
`;

    container.appendChild(card);
});