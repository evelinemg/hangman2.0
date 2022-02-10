function adicionaLinha(x, y){
  var elem = document.createElement("img");
  elem.src="img/traco.png"
  elem.style.position="absolute";
  elem.style.bottom=y+"vw";
  elem.style.right=x+"vw";
  elem.style.width="2%";
  /*elem.setAttribute("src", "traco.png");
  elem.setAttribute("style", "position:fixed; bottom:350px; right:800px; width: 2%");*/
  var divImage=document.getElementById("traco");
  divImage.appendChild(elem);
};

function addNumeroLinhas(espacos){
  var x=42;
  var y = 21.9;
  for(var i=0;i<espacos;i++){
    adicionaLinha(x, y);
    x=x-3.24;
  }
};
function addLetra(letra, x, y){
  var elem=document.createElement("letters");
  elem.innerHTML=letra;
  elem.style.position="absolute";
  elem.style.bottom=y+"vw";
  elem.style.right=x+"vw";
  elem.style.fontSize= " 1.875vw";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);

};
function addLetrasPosicao(letra,index){
  for(var i =0;i<index.length;i++){
    x=42.5-(index[i]*3.24);
    addLetra(letra, x,27.9);
  }
}
function desenhaMan(p){
  if(p==0){
    document.getElementById("forca").src="img/fo1.png";

  }
  else if(p==1){
    document.getElementById("forca").src="img/fo2.png";
  }
  else if(p==3){
    document.getElementById("forca").src="img/fo3.png";
  }
  else if(p==4){
    document.getElementById("forca").src="img/fo4.png";
  }
  else if(p==5){
    document.getElementById("forca").src="img/fo5.png";
  }
  else if(p==6){
    document.getElementById("forca").src="img/fo6.png";
  }

}
function venceu(){
  var elem=document.createElement("h1");
  elem.innerHTML="Você venceu!";
  elem.style.position="absolute";
  elem.style.top="24.875vw";
  elem.style.left="25vw";
  elem.style.fontSize= " 2.6vw";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);
  document.getElementById("forca").src="img/venceu.png";
}

function perdeu(word){
  var elem=document.createElement("h1");
  elem.innerHTML="Você perdeu! A palavra era "+word;
  elem.style.position="absolute";
  elem.style.top="21.87vw";
  elem.style.left="46.875vw";
  elem.style.fontSize= "1.35vw";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);
  document.getElementById("forca").src="img/fo61.png";
}
