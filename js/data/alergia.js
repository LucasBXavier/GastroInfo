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
    icone: `<i class="fa-solid fa-cow milk"></i>`,
    pagina: "/pages/alergias.html"
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
    icone: `<i class="fa-solid fa-egg egg"></i>`,
    pagina: "/pages/alergias.html"
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
    icone: `<i class="fa-solid fa-seedling amendoim"></i>`,
    pagina: "/pages/alergias.html"
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
    icone: `<i class="fa-solid fa-fish frutos-mar"></i>`,
    pagina: "/pages/alergias.html"
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
    icone: `<i class="fa-solid fa-leaf soja"></i>`,
    pagina: "/pages/alergias.html"
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
    icone: `<i class="fa-solid fa-wheat-awn gluten"></i>`,
    pagina: "/pages/alergias.html"
  }
];

export default alergiasData;