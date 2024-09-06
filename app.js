function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta.</p>"
      return
  }
  

  let resultados = "";

  for (let dado of dados) {
    let titulo = dado.titulo.toLocaleLowerCase();
    let descricao = dado.descricao;
    let tags = dado.tags; // Assumindo que tags é uma string
    let imagem = dado.imagem;

    // Verificar se a pesquisa está em algum dos campos
    if (titulo.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <img src="${imagem}"></img>
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>"
console.log(campoPesquisa)
  }

  section.innerHTML = resultados;
}