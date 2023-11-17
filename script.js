document.getElementById('inverteCor').addEventListener('click', funcao);

var TaVermelho = true;

function funcao() {
    var header = document.getElementById('header');
    var footer = document.querySelector('footer');

    var VERMELHO = "#d81e17"; 
    var AMARELO = "#e0f04e"; 

    if (TaVermelho) {
        header.style.backgroundColor = AMARELO;
        footer.style.backgroundColor = VERMELHO;
    } else {
        header.style.backgroundColor = VERMELHO;
        footer.style.backgroundColor = AMARELO;
    }

    if (TaVermelho === true) {
       TaVermelho = false
    }
    else{
        TaVermelho = true
    }
}



function iniciarAnimacao() {
    var animacao = document.getElementById('animacao');
    
    var posicaoInicial = 0;
    var posicaoFinal = 1500;
    var tempo = 4000; 
    var comeca = null;

    function animarQuadro(tempoAtual) {
        if (!comeca) {
            comeca = tempoAtual;
        }

        var tempoPassado = tempoAtual - comeca;
        var progresso = tempoPassado / tempo;

        if (progresso < 1) {
            
            var novaPosicao = posicaoInicial + (posicaoFinal - posicaoInicial) * progresso;

          
            animacao.style.left = novaPosicao + 'px';

            
            requestAnimationFrame(animarQuadro);
        } else {
            
            animacao.style.left = posicaoInicial + 'px';
            comeca = null;
        }
    }

    requestAnimationFrame(animarQuadro);
}

var js = document.getElementById('js');
var cardap = ["Hamburguer", "Reugrubmah"];

function exibirInformacoes() {
 
    js.innerHTML += "<hr>";

    let cont = 0;
    while (cont < cardap.length) {
        js.innerHTML += "<br> item : <br>" + cardap[cont++];
    }

    js.innerHTML += "<hr>";
}


var exibirInformacoesButton = document.getElementById('exibirInformacoesButton');
exibirInformacoesButton.addEventListener('click', exibirInformacoes);



