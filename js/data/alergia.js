const alergiasData = [
  {
    id: "leite",
    titulo: "Alergia ao leite",
    descricao:
      "Reação do sistema imunológico às proteínas do leite, como caseína e soro. Pode causar sintomas cutâneos, gastrointestinais e respiratórios.",
    sintomas: [
      "Urticária",
      "Coceira",
      "Inchaço",
      "Dor abdominal",
      "Vômitos",
      "Dificuldade para respirar"
    ],
    icone: `<i class="fa-solid fa-cow milk"></i>`
  },
  {
    id: "ovo",
    titulo: "Alergia ao ovo",
    descricao:
      "Resposta imunológica às proteínas do ovo, geralmente presentes na clara. É comum na infância e pode causar reações leves a graves.",
    sintomas: [
      "Coceira",
      "Urticária",
      "Náusea",
      "Vômitos",
      "Diarreia"
    ],
    icone: `<i class="fa-solid fa-egg egg"></i>`
  },
  {
    id: "amendoim",
    titulo: "Alergia ao amendoim",
    descricao:
      "Uma das alergias alimentares mais comuns e potencialmente graves. Pequenas quantidades podem desencadear reações intensas.",
    sintomas: [
      "Inchaço dos lábios",
      "Coceira",
      "Urticária",
      "Falta de ar",
      "Anafilaxia"
    ],
    icone: `<i class="fa-solid fa-seedling amendoim"></i>`
  },
  {
    id: "frutos-mar",
    titulo: "Alergia a frutos do mar",
    descricao:
      "Reação imunológica a proteínas presentes em crustáceos e moluscos, como camarão, caranguejo e lula.",
    sintomas: [
      "Coceira",
      "Urticária",
      "Inchaço",
      "Náusea",
      "Dificuldade respiratória"
    ],
    icone: `<i class="fa-solid fa-fish frutos-mar"></i>`
  },
  {
    id: "soja",
    titulo: "Alergia à soja",
    descricao:
      "Resposta do sistema imunológico às proteínas da soja, comum em crianças, mas também presente em adultos.",
    sintomas: [
      "Coceira",
      "Inchaço",
      "Dor abdominal",
      "Diarreia",
      "Urticária"
    ],
    icone: `<i class="fa-solid fa-leaf soja"></i>`
  },
  {
    id: "trigo",
    titulo: "Alergia ao trigo",
    descricao:
      "Reação alérgica às proteínas do trigo, diferente da doença celíaca e da sensibilidade ao glúten.",
    sintomas: [
      "Urticária",
      "Dor abdominal",
      "Inchaço",
      "Diarreia",
      "Dificuldade respiratória"
    ],
    icone: `<i class="fa-solid fa-wheat-awn gluten"></i>`
  }
];

const container = document.getElementById("cards");

alergiasData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <div class="card-icon">${item.icone}</div>
    <h3>${item.titulo}</h3>
    <p>${item.descricao}</p>
    <p><strong>Sintomas comuns:</strong> ${item.sintomas.join(", ")}</p>
`;

    container.appendChild(card);
});