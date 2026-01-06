const intoleranciasData = [
    {
        id: "lactose",
        titulo: "Intolerância à lactose",
        descricao:
            "Dificuldade na digestão do açúcar do leite devido à baixa produção da enzima lactase. Pode causar gases, inchaço e desconforto abdominal após o consumo de laticínios.",
        sintomas: ["Gases", "Inchaço", "Dor abdominal", "Diarreia", "Náusea"],
        icone: `
<i class="fa-solid fa-cow "></i>`,
        pagina: "/GastroInfo/pages/intolerancias.html"
    },
    {
        id: "frutose",
        titulo: "Intolerância à frutose",
        descricao:
            "Dificuldade do organismo em absorver a frutose, presente em frutas, mel e alguns adoçantes. Pode causar gases, distensão abdominal e diarreia.",
        sintomas: ["Gases", "Inchaço", "Diarreia", "Dor abdominal"],
        icone: `
            <i class="fa-solid fa-apple-whole frutose" ></i>
    `,
        pagina: "/GastroInfo/pages/intolerancias.html"
    },
    {
        id: "sorbitol",
        titulo: "Intolerância ao sorbitol",
        descricao:
            "Relacionada à má absorção do sorbitol, um adoçante comum em produtos diet e algumas frutas. Pode causar gases e desconforto intestinal.",
        sintomas: ["Gases", "Inchaço", "Diarreia"],
        icone: `
    <i class="fa-solid fa-candy-cane sorbitol" ></i>
    `,
        pagina: "/GastroInfo/pages/intolerancias.html"
    },
    {
        id: "gluten",
        titulo: "Sensibilidade ao glúten (não celíaca)",
        descricao:
            "Reação adversa ao glúten que não envolve alergia nem doença celíaca. Pode causar sintomas gastrointestinais após o consumo de alimentos com trigo.",
        sintomas: ["Dor abdominal", "Inchaço", "Diarreia", "Mal-estar"],
        icone: `
    <i class="fa-solid fa-wheat-awn gluten"></i>
    `,
        pagina: "/GastroInfo/pages/intolerancias.html"
    },
    {
        id: "fodmaps",
        titulo: "Intolerância a FODMAPs",
        descricao:
            "Dificuldade na digestão de carboidratos fermentáveis presentes em alimentos como leguminosas, trigo, cebola e alguns laticínios.",
        sintomas: ["Gases", "Inchaço", "Dor abdominal", "Diarreia"],
        icone: `
    <i class="fa-solid fa-cloud-meatball fodmaps" ></i>
    `,
        pagina: "/GastroInfo/pages/intolerancias.html"
    },
    {
        id: "aditivos",
        titulo: "Intolerância a aditivos alimentares",
        descricao:
            "Reações adversas a substâncias como corantes, conservantes ou realçadores de sabor. Os sintomas variam conforme o aditivo.",
        sintomas: ["Desconforto abdominal", "Náusea", "Diarreia"],
        icone: `
    <i class="fa-solid fa-flask aditivos"></i>
    `,
        pagina: "/GastroInfo/pages/intolerancias.html"

    }
];

export default intoleranciasData;