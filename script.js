let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");


btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0) { console.log(inputBuscarFilme.value); }
    return false;
};




/*console.log(inputBuscarFilme.value)*//*sla*/


btnBuscarFilme.onclick= () => {
    if(inputBuscarFilme.value.length > 0){
    let filmes = new Array();
    fetch("http://www.omdbapi.com/?apikey=ed5e5ad5&s="+inputBuscarFilme.value)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp)
        resp.Search.forEach((item)=>{
        console.log(item); new Filme()
        let filme=new Filme(
            item.imdbID,
            item.Title,
            item.Year,
            null,
            null,
            null,
            item.Poster,
            null,
            null,
            null,
            null
    );
        filmes.push(filme)
    });
    listarFilmes (filmes);
    })
    }
    return false;
}
















let listarFilmes = async (filmes) => {
    let listarFilmes = document.querySelector("#lista-filmes");
    listarFilmes.innerHTML = "";
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
             listarFilmes.appendChild(await filme.getCard());
        });
    }
    console.log(filmes)    
}




let btnDetalhes= document.querySelectorAll(".btnDetalhes");
btnDetalhes.forEach(item=>{
    item.addEventListenes("click", ("") = (this.id));
})
