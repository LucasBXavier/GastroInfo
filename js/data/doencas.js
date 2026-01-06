const doencasDigestivasData = [
    {
        id: "gastrite",
        titulo: "Gastrite",
        descricao:
            "Inflamação da mucosa do estômago, geralmente causada por infecção, uso excessivo de medicamentos ou alimentação inadequada.",
        sintomas: ["Dor no estômago", "Queimação", "Náusea", "Azia"],
        icone: `
        <i class="fa-solid fa-person-dots-from-line gastrite"></i>
        `,
        pagina: "/pages/doencas.html"
    },
    {
        id: "refluxo",
        titulo: "Doença do Refluxo Gastroesofágico (DRGE)",
        descricao:
            "Condição em que o ácido do estômago retorna para o esôfago, causando desconforto e irritação.",
        sintomas: ["Azia", "Queimação", "Dor no peito", "Regurgitação"],
        icone: `
            <i class="fa-solid fa-fire-flame-simple refluxo"></i>
        `,
        pagina: "/pages/doencas.html"
    },
    {
        id: "sii",
        titulo: "Síndrome do Intestino Irritável",
        descricao:
            "Distúrbio funcional do intestino que afeta a motilidade intestinal, sem causar inflamação visível.",
        sintomas: ["Dor abdominal", "Inchaço", "Diarreia", "Constipação"],
        icone: `
            <i class="fa-solid fa-wave-square sii"></i>
        `,
        pagina: "/pages/doencas.html"
    },
    {
        id: "doenca-celiaca",
        titulo: "Doença Celíaca",
        descricao:
            "Doença autoimune em que o consumo de glúten causa inflamação e danos ao intestino delgado.",
        sintomas: ["Diarreia", "Dor abdominal", "Inchaço", "Perda de peso"],
        icone: `
            <i class="fa-solid fa-bread-slice doenca-celiaca"></i>
        `,
        pagina: "/pages/doencas.html"
    },
    {
        id: "crohn",
        titulo: "Doença de Crohn",
        descricao:
            "Doença inflamatória crônica do trato digestivo que pode afetar diferentes regiões do intestino, causando inflamação persistente e sintomas recorrentes.",
        sintomas: [
            "Dor abdominal",
            "Diarreia crônica",
            "Perda de peso",
            "Fadiga",
            "Inflamação intestinal"
        ],
        icone: `<i class="fa-solid fa-bacteria crohn"></i>`,
        pagina: "/pages/doencas.html"
    },
    {
        id: "diarreia-cronica",
        titulo: "Diarreia Crônica",
        descricao:
            "Evacuações frequentes e líquidas por um período prolongado, podendo indicar doenças intestinais.",
        sintomas: ["Fezes líquidas", "Dor abdominal", "Desidratação"],
        icone: `
            <i class="fa-solid fa-water diarreia"></i>
        `,
        pagina: "/pages/doencas.html"
    }
];

export default doencasDigestivasData;