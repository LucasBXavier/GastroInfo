// search.js (use type="module" e defer no HTML)
(async function initSearch() {
  // referencia ao DOM (checa existência antes de carregar qualquer dado)
  const input = document.getElementById("search-input");
  const resultsBox = document.getElementById("search-results");

  // se não tiver a search bar nesta página, não carregamos nada
  if (!input || !resultsBox) {
    // console.log opcional para debug
    // console.warn("Search bar não encontrada; search.js não será inicializado.");
    return;
  }

  // --------- import dinâmico dos dados (só rola se a barra existir) ----------
  const [
    intoleranciasMod,
    alergiasMod,
    doencasMod,
    dietasMod
  ] = await Promise.all([
    import("./data/intolerancia.js"),
    import("./data/alergia.js"),
    import("./data/doencas.js"),
    import("./data/dieta.js")
  ]);

  const intoleranciasData = (intoleranciasMod.default ?? intoleranciasMod.intoleranciasData) || [];
  const alergiasData = (alergiasMod.default ?? alergiasMod.alergiasData) || [];
  const doencasDigestivasData = (doencasMod.default ?? doencasMod.doencasDigestivasData) || [];
  const dietasData = (dietasMod.default ?? dietasMod.dietasData) || [];

  /* junta todos os dados */
  const allData = [
    ...intoleranciasData.map(i => ({ ...i, tipo: "Intolerância" })),
    ...alergiasData.map(i => ({ ...i, tipo: "Alergia" })),
    ...doencasDigestivasData.map(i => ({ ...i, tipo: "Doença Digestiva" })),
    ...dietasData.map(i => ({ ...i, tipo: "Estratégia Alimentar" }))
  ];

  /* normalização */
  const normalize = text =>
    String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const highlight = (text, query) => {
    if (!query) return text;
    // escape do query para regex
    const q = String(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return String(text).replace(new RegExp(`(${q})`, "ig"), "<mark>$1</mark>");
  };

  /* busca */
  function search(query) {
    const q = normalize(query);
    if (!q) return [];

    return allData.filter(item =>
      normalize(item.titulo).includes(q) ||
      normalize(item.descricao).includes(q) ||
      (item.sintomas && item.sintomas.some(s => normalize(s).includes(q))) ||
      (item.pontos && item.pontos.some(p => normalize(p).includes(q)))
    ).slice(0, 8);
  }

  /* render autocomplete */
  function renderResults(items, query) {
    if (!items.length) {
      resultsBox.classList.add("hidden");
      resultsBox.innerHTML = "";
      return;
    }

    resultsBox.innerHTML = "";

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "search-item";

      div.innerHTML = `
            <div class="icon">${item.icone ?? ""}</div>
            <div>
                <strong>${highlight(item.titulo, query)}</strong>
                <span>${item.tipo}</span>
            </div>
        `;

      div.addEventListener("click", () => {
        // limpar busca antes de sair
        input.value = "";
        resultsBox.innerHTML = "";
        resultsBox.classList.add("hidden");

        // limpa ?q= se existir
        history.replaceState(null, "", location.pathname);

        // redireciona para a página correta com hash (o script de highlight na página de destino deve existir)
        // assegure que item.pagina existe no seu data (ex: "/pages/intolerancias.html")
        const targetUrl = item.pagina ? `${item.pagina}#${item.id}` : `#${item.id}`;
        // pequeno delay pra garantir limpeza visual antes de navegar
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 60);
      });

      resultsBox.appendChild(div);
    });

    resultsBox.classList.remove("hidden");
  }

  /* debounce simples */
  let timeout;
  input.addEventListener("input", e => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const value = e.target.value.trim();
      if (!value) {
        resultsBox.classList.add("hidden");
        resultsBox.innerHTML = "";
        history.replaceState(null, "", location.pathname);
        return;
      }

      const results = search(value);
      renderResults(results, value);

      /* atualiza URL (SEO) sem recarregar */
      history.replaceState(null, "", `?q=${encodeURIComponent(value)}`);
    }, 220);
  });

  /* ESC fecha */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      resultsBox.classList.add("hidden");
      input.blur();
    }
  });

  /* fechar ao clicar fora */
  document.addEventListener("click", (e) => {
    if (!resultsBox.contains(e.target) && e.target !== input) {
      resultsBox.classList.add("hidden");
    }
  });

  // opcional: se a página carregou com ?q=, preencher input (não renderiza todos os cards)
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  if (q) {
    input.value = q;
    const results = search(q);
    renderResults(results, q);
    history.replaceState(null, "", location.pathname + `?q=${encodeURIComponent(q)}`);
  }
})();
