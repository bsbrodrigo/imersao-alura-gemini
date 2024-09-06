function pesquisar() {
    // Declara uma função chamada 'pesquisar'
    // Essa função é responsável por exibir os resultados da pesquisa na página
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção HTML com o ID "resultados-pesquisa"
    // Essa seção será usada para inserir os resultados da pesquisa
  
    console.log(section);
    // Imprime no console o elemento encontrado. Útil para depuração.
  
    // Itera sobre cada dado dentro da lista 'dados'
    for (let dado of dados) {
      // Para cada dado, cria um novo elemento HTML com a classe 'item-resultado'
      // Esse elemento representa um resultado da pesquisa
      section.innerHTML += `
      <div class="item-resultado">
                  <h2>
                  <img src=${dado.imagem} class ="foto" alt "imagem">                
                  <p class="descricao-meta">
                      <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  ${dado.descricao}</p>
                  <a href=${dado.link}target="_blank">Mais informações</a>
              </div>
  `
    }
}
  // console.log(dados);






