function pesquisar() {
    console.log("Pesquisar");
}

// console.log(dados);

let section = document.getElementById("resultados-pesquisa")
console.log(section);

let resultados = ""
//para cada dado dentro da lista de daos
for(let dado of dados) {
    section.innerHTML = `
    <div class="item-resultado">
               <h2>
                   <a href="#" target="_blank">${dados[0].titulo}</a> 
               </h2>
               <p class="descrição-meta"  style="text-align: left;"> ${dados[0].descricao}</p>
               <a href="[Link para o perfil da Dra. Renata, se disponível]" target="_blank">Mais informações</a> 
           </div>
           `

}

