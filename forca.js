let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
	palavra001 = {
		nome: "IRLANDA",
		categoria: "Dica: LUGAR"
	},
	palavra002 = {
		nome: "EQUADOR",
		categoria: "Dica: LUGAR"
	},
	palavra003 = {
		nome: "CHILE",
		categoria: "Dica: LUGAR"
	},
	palavra004 = {
		nome: "INDONESIA",
		categoria: "Dica: LUGAR"
	},
	palavra005 = {
		nome: "MALDIVAS",
		categoria: "Dica: LUGAR"
	},
	palavra006 = {
		nome: "GROELANDIA",
		categoria: "Dica: LUGAR"
	},
	palavra007 = {
		nome: "UZBEQUISTAO",
		categoria: "Dica: LUGAR"
	},
	palavra008 = {
		nome: "AUSTRIA",
		categoria: "Dica: LUGAR"
	},
	palavra009 = {
		nome: "HAVAI",
		categoria: "Dica: LUGAR"
	},
	palavra010 = {
		nome: "KOPENHAGEN",
		categoria: "Dica: LUGAR"
	},
	palavra011 = {
		nnome: "BICICLETA",
		categoria: "Dica: TRANSPORTE"
	},
	palavra012 = {
		nome: "LANCHA",
		ccategoria: "Dica: TRANSPORTE"
	},
	palavra013 = {
		nome: "NAVIO",
		categoria: "Dica: TRANSPORTE"
	},
	palavra014 = {
		nome: "TELEFERICO",
		categoria: "Dica: TRANSPORTE"
	},
	palavra015 = {
		nome: "MOTOCICLETA",
		categoria: "Dica: TRANSPORTE"
	},
	palavra016 = {
		nome: "BARCO",
		categoria: "Dica: TRANSPORTE"
	},
	palavra017 = {
		nome: "AERONAVE",
		categoria: "Dica: TRANSPORTE"
	},
	palavra018 = {
		nome: "TREM",
		categoria: "Dica: TRANSPORTE"
	},
	palavra019 = {
		nome: "CAIAQUE",
		categoria: "Dica: TRANSPORTE"
	},
	palavra020 = {
		nome: "ONIBUS",
		categoria: "Dica: TRANSPORTE"
	},
	palavra021 = {
		nome: "SINO",
		categoria: "Dica: OBJETO"
	},
	palavra022 = {
		nome: "CHAVEIRO",
		categoria: "Dica: OBJETO"
	},
	palavra023 = {
		nome: "LAMPADA",
		categoria: "Dica: OBJETO"
	},
	palavra024 = {
		nome: "CORTINA",
		categoria: "Dica: OBJETO"
	},
	palavra025 = {
		nome: "LAPIS",
		categoria: "Dica: OBJETO"
	},
	palavra026 = {
		nome: "APONTADOR",
		categoria: "Dica: OBJETO"
	},
	palavra027 = {
		nome: "ESPADA",
		categoria: "Dica: OBJETO"
	},
	palavra028 = {
		nome: "MONITOR",
		categoria: "Dica: OBJETO"
	},
	palavra029 = {
		nome: "VARAL",
		categoria: "Dica: OBJETO"
	},
	palavra030 = {
		nome: "AGULHA",
		categoria: "Dica: OBJETO"
	},
	palavra031 = {
		nome: "MELANCIA",
		categoria: "Dica: ALIMENTO"
	},
	palavra032 = {
		nome: "CASTANHA",
		categoria: "Dica: ALIMENTO"
	},
	palavra033 = {
		nome: "KIBE",
		categoria: "Dica: ALIMENTO"
	},
	palavra034 = {
		nome: "ALMONDEGA",
		categoria: "Dica: ALIMENTO"
	},
	palavra035 = {
		nome: "SAGU",
		categoria: "Dica: ALIMENTO"
	},
	palavra036 = {
		nome: "CEREJA",
		categoria: "Dica: ALIMENTO"
	},
	palavra037 = {
		nome: "POPOCA",
		categoria: "Dica: ALIMENTOS"
	},
	palavra038 = {
		nome: "FILE",
		categoria: "Dica: ALIMENTO"
	},
	palavra039 = {
		nome: "MANGA",
		categoria: "Dica: ALIMENTO"
	},
	palavra040 = {
		nome: "PRETZEL",
		categoria: "Dica: ALIMENTO"
	},
	palavra041 = {
		nome: "MOTOCICLISMO",
		categoria: "Dica: ESPORTE"
	},
	palavra042 = {
		nome: "BASEBALL",
		categoria: "Dica: ESPORTE"
	},
	palavra043 = {
		nome: "ESGRIMA",
		categoria: "Dica: ESPORTE"
	},
	palavra044 = {
		nome: "HIPISMO",
		categoria: "Dica: ESPORTE"
	},
	palavra045 = {
		nome: "ATLETISMO",
		categoria: "Dica: ESPORTE"
	},
	palavra046 = {
		nome: "ALTEROFILISMO",
		categoria: "Dica: ESPORTE"
	},
	palavra047 = {
		nome: "GOLF",
		categoria: "Dica: ESPORTE"
	},
	palavra048 = {
		nome: "RALLY",
		categoria: "Dica: ESPORTE"
	},
	palavra049 = {
		nome: "BALE",
		categoria: "Dica: ESPORTE"
	},
	palavra050 = {
		nome: "REMO",
		categoria: "Dica: ESPORTE"
	}
];



criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "grey";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("Que pena! Continue tentando...", "A palavra secreta era " + palavraSecretaSorteada + " .");
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS! VOCÊ VENCEU!", "Que esperteza, heim!?!");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto2.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto3.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto4.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto5.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto6.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto6.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto1.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});
