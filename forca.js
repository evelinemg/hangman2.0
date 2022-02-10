var p=0;
var count=0;
var word=''
var letraUser=''
var userPerdeu=false
var botaoIniciar = document.querySelector("#iniciar-jogo");
botaoIniciar.addEventListener('click',function(event){
  word=buscaPalavra();
  console.log(word);
  letras=split(word);
  espacos=letras.length;
  addNumeroLinhas(espacos);
  var tecla=document.getElementById('keyboard');
  tecla.onclick=teclaEnter;
  document.addEventListener('keydown', (event) => {
  var name = event.key;
  letraUser=name.toUpperCase();
  if(verifica(letraUser)){
    verificaLetra(letraUser);
  }

}, false);
});

function split(word){
  var word=word.split('');
  return word;

};

function teclaEnter(event) {
  letraUser=event.target.id;
  if(verifica(letraUser)){
    verificaLetra(letraUser);
  };


}

function verificaLetra(letra){
  var index=[];
  n=0;
  for(var i=0; i<espacos;i++){
    if(letra==letras[i]){
      index[n]=i;
      n=n+1;
      count=count+1;
    }
  }
  if(n==0){
    desenhaMan(p);
    addLetraErrada(letra);
    p=p+1;
  }
  else{
    addLetrasPosicao(letra, index);
    addLetraCerta(letra);
  }
  if(p==6){
    perdeu(word);
    userPerdeu=true;

  }
  if(count==letras.length){
    venceu();
    userPerdeu=true;
  }
};

function addLetraErrada(letra){
  a=document.querySelector('#'+letra);
  a.setAttribute('data-state', 'absent');

}
function addLetraCerta(letra){
  a=document.querySelector('#'+letra);
  a.setAttribute('data-state', 'valid');

}
function validaLetra(letra){
  var letters = /^[A-Za-z]+$/;
   if(letra.match(letters)){
      return true;
     }
   else{
     return false;
     }
}
function repeticao(letra){
  a=document.querySelector('#'+letra);
  b=a.getAttribute('data-state');
  if(b=='valid' || b=='absent'){
    return false;
  }
  else{
    return true;
  }
}
function verifica(letra){
  if(validaLetra(letraUser)&& repeticao(letraUser)&&!userPerdeu){
    return true;
  }
  else{
    return false;
  }


}
