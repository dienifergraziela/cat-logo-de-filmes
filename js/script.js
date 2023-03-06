class filme{
    constructor(id,titulo,ano,genero,duracao,sinopse,cartaz,direcao,elenco,classificacao,avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
    }
}

let genero=["aqui","ficcao cientifica"];

let sinopse=["sla"];

let direcao=[
    new diretor(1,"lam"),
    new diretor(2,"lily")
];

let elenco=[
    new Ator(1,"kamu"),
    new Ator(2,"carew"),
    new Ator(3,"jai")
];

let Filme=new Filme(
    1,
    "matrix",
    1999,
    genero,
    136,
    sinopse,
    "http...",
    direcao,
    elenco,
    14,
    8,8
);

console.log(Filme);

fetch()