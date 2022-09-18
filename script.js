let numTentativas = 5;
let listaAleatoria = []; 
let secretWordCategoria; 
let secretWordSorteada;

const palavras = [
	plvra01 = {
		nome: "IRLANDA",
		dica: "Dica: LUGAR"
	},
	plvra02 = {
		nome: "EQUADOR",
		dica: "Dica: LUGAR"
	},
	plvra03 = {
		nome: "CHILE",
		dica: "Dica: LUGAR"
	},
	plvra04 = {
		nome: "INDONESIA",
		dica: "Dica: LUGAR"
	},
	plvra05 = {
		nome: "MALDIVAS",
		dica: "Dica: LUGAR"
	},
	plvra06 = {
		nome: "GROELANDIA",
		cdica: "Dica: LUGAR"
	},
	plvra07 = {
		nome: "UZBEQUISTAO",
		dica: "Dica: LUGAR"
	},
	plvra08 = {
		nome: "AUSTRIA",
		dica: "Dica: LUGAR"
	},
	plvra09 = {
		nome: "HAVAI",
		dica: "Dica: LUGAR"
	},
	plvra10 = {
		nome: "KOPENHAGEN",
		dica: "Dica: LUGAR"
	},
	plvra11 = {
		nnome: "BICICLETA",
		dica: "Dica: TRANSPORTE"
	},
	plvra12 = {
		nome: "LANCHA",
		dica: "Dica: TRANSPORTE"
	},
	plvra13 = {
		nome: "NAVIO",
		dica: "Dica: TRANSPORTE"
	},
	plvra14 = {
		nome: "TELEFERICO",
		dica: "Dica: TRANSPORTE"
	},
	plvra15 = {
		nome: "MOTOCICLETA",
		dica: "Dica: TRANSPORTE"
	},
	plvra16 = {
		nome: "BARCO",
		dica: "Dica: TRANSPORTE"
	},
	plvra17 = {
		nome: "AERONAVE",
		dica: "Dica: TRANSPORTE"
	},
	plvra18 = {
		nome: "TREM",
		dica: "Dica: TRANSPORTE"
	},
	plvra19 = {
		nome: "CAIAQUE",
		dica: "Dica: TRANSPORTE"
	},
	plvra20 = {
		nome: "ONIBUS",
		dica: "Dica: TRANSPORTE"
	},
	plvra21 = {
		nome: "SINO",
		dica: "Dica: OBJETO"
	},
	plvra22 = {
		nome: "CHAVEIRO",
		dica: "Dica: OBJETO"
	},
	plvra23 = {
		nome: "LAMPADA",
		dica: "Dica: OBJETO"
	},
	plvra24 = {
		nome: "CORTINA",
		dica: "Dica: OBJETO"
	},
	plvra25 = {
		nome: "LAPIS",
		dica: "Dica: OBJETO"
	},
	plvra26 = {
		nome: "APONTADOR",
		dica: "Dica: OBJETO"
	},
	plvra27 = {
		nome: "ESPADA",
		dica: "Dica: OBJETO"
	},
	plvra28 = {
		nome: "MONITOR",
		dica: "Dica: OBJETO"
	},
	plvra29 = {
		nome: "VARAL",
		dica: "Dica: OBJETO"
	},
	plvra30 = {
		nome: "AGULHA",
		dica: "Dica: OBJETO"
	},
	plvra31 = {
		nome: "MELANCIA",
		dica: "Dica: ALIMENTO"
	},
	plvra32 = {
		nome: "CASTANHA",
		dica: "Dica: ALIMENTO"
	},
	plvra33 = {
		nome: "KIBE",
		dica: "Dica: ALIMENTO"
	},
	plvra34 = {
		nome: "ALMONDEGA",
		dica: "Dica: ALIMENTO"
	},
	plvra35 = {
		nome: "SAGU",
		dica: "Dica: ALIMENTO"
	},
	plvra36 = {
		nome: "CEREJA",
		dica: "Dica: ALIMENTO"
	},
	plvra37 = {
		nome: "POPOCA",
		dica: "Dica: ALIMENTOS"
	},
	plvra38 = {
		nome: "FILE",
		dica: "Dica: ALIMENTO"
	},
	plvra39 = {
		nome: "MANGA",
		dica: "Dica: ALIMENTO"
	},
	plvra40 = {
		nome: "PRETZEL",
		dica: "Dica: ALIMENTO"
	},
	plvra41 = {
		nome: "MOTOCICLISMO",
		dica: "Dica: ESPORTE"
	},
	plvra42 = {
		nome: "BASEBALL",
		dica: "Dica: ESPORTE"
	},
	plvra43 = {
		nome: "ESGRIMA",
		dica: "Dica: ESPORTE"
	},
	plvra44 = {
		nome: "HIPISMO",
		dica: "Dica: ESPORTE"
	},
	plvra45 = {
		nome: "ATLETISMO",
		dica: "Dica: ESPORTE"
	},
	plvra46 = {
		nome: "ALTEROFILISMO",
		dica: "Dica: ESPORTE"
	},
	plvra47 = {
		nome: "GOLF",
		dica: "Dica: ESPORTE"
	},
	plvra48 = {
		nome: "RALLY",
		dica: "Dica: ESPORTE"
	},
	plvra49 = {
		nome: "BALE",
		dica: "Dica: ESPORTE"
	},
	plvra50 = {
		nome: "REMO",
		dica: "Dica: ESPORTE"
	}
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    secretWordSorteada = palavras[indexPalavra].nome;
    secretWordCategoria = palavras[indexPalavra].dica;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const dica = document.getElementById("dica");
    dica.innerHTML = secretWordCategoria;

    const palavraTela = document.getElementById("top-secret");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < secretWordSorteada.length; i++){  
        if(listaAleatoria[i] == undefined){
            if (secretWordSorteada[i] == " ") {
                llistaAleatoria[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaAleatoria[i] + "</div>"
            }
            else{
                listaAleatoria[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaAleatoria[i] + "</div>"
            }     
        }
        else{
            if (secretWordSorteada[i] == " ") {
                listaAleatoria[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaAleatoria[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaAleatoria[i] + "</div>"
            }    
        }
    }   
}

function checkletter(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(numTentativas > 0)
    {
        letterChange("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function letterChange(tecla, layout){
    if(layout == false)
    {
        document.getElementById(tecla).style.background = "#bf0000";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = secretWordSorteada.indexOf(letra)
    if(pos < 0){
        numTentativas--
        carregaImagemForca();

        if(numTentativas == 0){
            abreModal("Que pena! Tenta outra vez...", "A palavra é " + secretWordSorteada + " .");
        }
    }
    else{
        letterChange("tecla-" + letra, true);
        for(i = 0; i < secretWordSorteada.length; i++){
            if(secretWordSorteada[i] == letra){
                listaAleatoria[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < secretWordSorteada.length; i++){
        if(secretWordSorteada[i] != listaAleatoria[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!!!", "Mandou bem!!");
        numTentativas = 0;
    }
}

function carregaImagemForca(){
    switch(numTentativas){
        case 4:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto2.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto3.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto4.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('../homem-e-jacare/meu-projeto5.png')";
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
    let modalTitulo = document.getElementById("exModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#answerModal").modal({
        show: true
    });
}

let bntZerar = document.querySelector("#btnZerar")
bntZerar.addEventListener("click", function(){
    location.reload();
});
