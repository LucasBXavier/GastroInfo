const dietasData = [
    {
        id: "sem-vs-zero-lactose",
        titulo: "Sem lactose x Zero lactose",
        descricao:
            "Produtos rotulados como 'sem lactose' e 'zero lactose' podem parecer iguais, mas o significado pode variar conforme a legislação e o processo de fabricação. Em geral, o 'zero lactose' indica que a lactose foi quebrada ou removida, enquanto 'sem lactose' pode indicar ausência natural ou uso de enzimas no processo.",
        pontos: [
            "Zero lactose: lactose quebrada em glicose e galactose",
            "Sem lactose: pode variar conforme o produto",
            "A tolerância pode ser diferente para cada pessoa"
        ],
        icone: `<i class="fa-solid fa-glass-water-droplet dietas"></i>`,
        pagina: "/GastroInfo/pages/dietas.html"
    },
    {
        id: "produtos-sem-gluten",
        titulo: "Produtos sem glúten",
        descricao:
            "Alimentos identificados como 'sem glúten' são formulados para não conter essa proteína, presente principalmente no trigo, cevada e centeio. Eles costumam ser utilizados por pessoas com doença celíaca ou sensibilidade ao glúten.",
        pontos: [
            "Nem todo produto sem glúten é mais saudável",
            "Pode haver diferenças de textura e sabor",
            "Atenção à contaminação cruzada"
        ],
        icone: `<i class="fa-solid fa-wheat-awn-circle-exclamation dietas"></i>`,
        pagina: "/GastroInfo/pages/dietas.html"
    },
    {
        id: "substituicoes-alimentares",
        titulo: "Substituições alimentares",
        descricao:
            "Uma prática comum em estratégias alimentares é a substituição de ingredientes por versões semelhantes, buscando reduzir desconfortos ou reações adversas sem eliminar totalmente determinados grupos de alimentos.",
        pontos: [
            "Troca de leite por bebidas vegetais",
            "Uso de adoçantes alternativos",
            "Escolha de ingredientes mais toleráveis"
        ],
        icone: `<i class="fa-solid fa-arrows-rotate dietas"></i>`,
        pagina: "/GastroInfo/pages/dietas.html"
    },
    {
        id: "evitacao-temporaria",
        titulo: "Evitação temporária de alimentos",
        descricao:
            "Em alguns contextos, pessoas optam por evitar certos alimentos por um período, observando como o corpo reage. Essa prática costuma ser utilizada de forma experimental e educativa.",
        pontos: [
            "Observação dos sintomas",
            "Reintrodução gradual",
            "Respostas variam entre indivíduos"
        ],
        icone: `<i class="fa-solid fa-clock dietas"></i>`,
        pagina: "/GastroInfo/pages/dietas.html"
    },
    {
        id: "rotulos-e-ingredientes",
        titulo: "Leitura de rótulos e ingredientes",
        descricao:
            "Entender rótulos alimentares é uma das bases das estratégias alimentares. Informações como ingredientes, alergênicos e aditivos ajudam na tomada de decisões mais conscientes.",
        pontos: [
            "Identificação de alergênicos",
            "Presença de aditivos alimentares",
            "Diferença entre marketing e composição real"
        ],
        icone: `<i class="fa-solid fa-tags dietas"></i>`,
        pagina: "/GastroInfo/pages/dietas.html"
    },
    {
        id: "fodmaps",
        titulo: "FODMAPs e escolhas alimentares",
        descricao:
            "O termo FODMAPs é usado para descrever certos carboidratos que podem ser mal absorvidos por algumas pessoas. Em estratégias alimentares amplamente conhecidas, é comum observar como o organismo reage a alimentos ricos nesses componentes, optando por substituições ou pela redução temporária de alguns itens.",
        pontos: [
            "Substituição de alimentos por versões mais toleráveis",
            "Redução ou evitação temporária de certos alimentos",
            "Observação dos sintomas após o consumo",
            "Reintrodução gradual conforme a resposta individual"
        ],
        icone: `<i class="fa-solid fa-circle-nodes dietas"></i>`,
        pagina: "/GastroInfo/pages/dietas.html"
    }
];

export default dietasData;