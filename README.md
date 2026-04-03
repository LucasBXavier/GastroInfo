# GastroInfo

## Sobre o projeto
GastroInfo e um site informativo sobre saude gastrointestinal, com foco em:

- alergias alimentares
- intolerancias
- doencas gastrointestinais
- orientacoes gerais de dieta

O objetivo e apresentar conteudo educativo de forma clara, com navegacao simples e leitura rapida.

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap (layout e componentes)
- Font Awesome (icones)

## Como os dados sao renderizados
O projeto usa uma separacao simples entre dados e exibicao:

1. Os conteudos ficam em arquivos JavaScript dentro de `js/data/`.
2. Cada pagina tem um arquivo de renderizacao correspondente em `js/render/`.
3. O renderizador le os dados, monta o HTML dinamicamente e injeta no DOM da pagina.
4. Scripts auxiliares como `search.js` e `toast.js` adicionam busca e feedback visual.

Esse formato facilita manutencao: para atualizar conteudo, basta editar os arquivos de dados; para mudar a forma de exibicao, edita-se apenas os renderizadores.

## Estrutura do projeto
```
.
├── assets/
│   └── favicon/
├── js/
│   ├── data/
│   ├── render/
│   ├── search.js
│   └── toast.js
├── pages/
│   ├── template/
│   ├── alergias.html
│   ├── dietas.html
│   ├── doencas.html
│   └── intolerancias.html
├── styles/
│   ├── icones.css
│   ├── responsividade.css
│   └── style.css
├── index.html
├── robots.txt
├── sitemap.xml
├── LICENSE
└── README.md
```

## Execucao local
Como e um projeto estatico, basta abrir o arquivo `index.html` no navegador.

Se preferir, rode com um servidor local para melhor experiencia de desenvolvimento (ex.: Live Server no VS Code).

## Acesso online
Link de acesso ao projeto:
https://lucasbxavier.github.io/GastroInfo/
