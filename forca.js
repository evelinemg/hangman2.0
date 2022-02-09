var p=0;
var count=0;
var word=''
var letraUser=''
var botaoIniciar = document.querySelector("#iniciar-jogo");
botaoIniciar.addEventListener('click',function(event){
  word=buscaPalavra();
  console.log(word);
  letras=split(word);
  espacos=letras.length;
  addNumeroLinhas(espacos);
  var tecla=document.getElementById('keyboard');
  tecla.onclick=teclaEnter;


});

function split(word){
  var word=word.split('');
  return word;

};

function teclaEnter(event) {
  letraUser=event.target.id;
  verificaLetra(letraUser);
}

function verificaLetra(letra){
  var index=[];
  n=0;
  for(var i=0; i<espacos;i++){
    if(letra==letras[i]){
      console.log(letra, letras[i])
      index[n]=i;
      n=n+1;
      count=count+1;
    }
  }
  addLetrasPosicao(letra, index);
  addLetraCerta(letra);


  if(n==0){
  desenhaMan(p);
    addLetraErrada(letra);
    p=p+1;
  }
  if(count==letras.length){
    venceu();
  }
  if(p==6){
    perdeu(word);
  }

};
/*
function desenhaMan(p){
  if(p==0){
    desenhaCabeca();
  }
  else if(p==1){
    desenhaCorpo();
  }
  else if(p==2){
    desenhaBracoDireito();

  }
  else if(p==3){
    desenhaBracoEsquerdo();

  }
  else if(p==4){
    desenhaPernaDireita();
  }
  else if(p==5){
    desenhaPernaEsquerda();
   mensagemPerdeu(word);
  }
}

function verificaLetraPalavra(letra,word){
  if(letra.length==1){
    verificaLetra(letra);
  }
  else{
       if(word===letra){
         messagemVenceu();
         mostraPalavra(word);
       }
       else{
         alert("Não é a palavra correta. Tente mais uma vez");
       }

  }*/

/*botaoIniciar.addEventListener("click", function(event){
  pincel.clearRect(0, 0, 800, 600);
  desenhaForca();
  word = buscaPalavra();
  letras=split(word);
  espacos=letras.length;
  console.log(word);
  quantidadeRetangulos(50,550, espacos);
  p=0;
});


var letra= '';
var botaoNovaPalavra = document.querySelector("#nova-palavra");
botaoNovaPalavra.addEventListener("click", function(event){
  event.preventDefault();
  var areaLetra=document.querySelector("#input-nova-palavra");
  letra=areaLetra.value;
  letra=letra.toUpperCase();
  verificaLetraPalavra(letra,word);
  var form = document.querySelector("input-nova-palavra");
  areaLetra.value='';

});


 function mostraPalavra(word){
   console.log(word);
   word=word.split('');
   for(var i=0;i<word.length;i++){
     var x=60+(i*50);
     addLetra(word[i],x,590)

   }
 }*/
/*myMain();
 function myMain() {
   document.getElementById("keyboard").onclick = buton;
 }
 function buton(e) {
  console.log(e.target.id);
}*/
function addLetraErrada(letra){
  console.log('#'+letra);
  a=document.querySelector('#'+letra);
  a.setAttribute('data-state', 'absent');

}
function addLetraCerta(letra){
  console.log('#'+letra);
  a=document.querySelector('#'+letra);
  a.setAttribute('data-state', 'valid');

}
