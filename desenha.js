function adicionaLinha(x, y){
  var elem = document.createElement("img");
  elem.src="img/traco.png"
  elem.style.position="absolute";
  elem.style.bottom=y+"px";
  elem.style.right=x+"px";
  elem.style.width="2%";
  /*elem.setAttribute("src", "traco.png");
  elem.setAttribute("style", "position:fixed; bottom:350px; right:800px; width: 2%");*/
  var divImage=document.getElementById("traco");
  divImage.appendChild(elem);
};

function addNumeroLinhas(espacos){
  var x=800;
  var y = 400;
  for(var i=0;i<espacos;i++){
    adicionaLinha(x, y);
    x=x-60;
  }
};
function addLetra(letra, x, y){
  var elem=document.createElement("letters");
  elem.innerHTML=letra;
  elem.style.position="absolute";
  elem.style.bottom=y+"px";
  elem.style.right=x+"px";
  elem.style.fontSize= "36px";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);

};
function addLetrasPosicao(letra,index){
  for(var i =0;i<index.length;i++){
    x=810-(index[i]*60);
    addLetra(letra, x,400);
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
  elem.style.top="420px";
  elem.style.left="500px";
  elem.style.fontSize= "50px";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);
  document.getElementById("forca").src="img/venceu.png";
}

function perdeu(word){
  var elem=document.createElement("h1");
  elem.innerHTML="Você perdeu! A palavra era "+word;
  elem.style.position="absolute";
  elem.style.top="420px";
  elem.style.left="900px";
  elem.style.fontSize= "26px";
  var divText=document.getElementById('letra');
  divText.appendChild(elem);
  document.getElementById("forca").src="img/fo61.png";
}
