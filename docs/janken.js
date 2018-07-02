'use strict';
var aite = document.getElementById("aite");

var janken = new Array();
var btnFlg = 0; //ボタンの二度押し防止用
var vFlg = null; //連勝の表示用
janken[0] = "<div id='vZone'></div><div id='ygu'><img src='./image/gu.jpg'></div>";
janken[1] = "<div id='vZone'></div><div id='ytyo'><img src='./image/tyoki.jpg'></div>";
janken[2] = "<div id='vZone'></div><div id='ypa'><img src='./image/pa.jpg'></div>";

var cnt = 0;
function start (){
  if(!!document.getElementById('rsl')){ //rsl..result(結果)要素を消さないとどんどん追加されていくから削除するコード
    var result = document.getElementById('kekka');
    var rsl = document.getElementById('rsl');
    result.removeChild(rsl);
    
  }
  aite.innerHTML = janken[cnt];

  if(cnt==2){    
    cnt=0; 
  }else{
    cnt++;
  }
}
var a;
function slide(){
  start();
   a = setTimeout(function() {
    slide();
},50);
}

function stop() {
  clearTimeout(a);
}

var strbtn =document.getElementsByClassName("strbtn");
strbtn[0].onclick = function (){
  if(btnFlg === 0){
    btnFlg = 1;
  slide();
  }
}

var gubtn = document.getElementsByClassName('gu');
var tyobtn = document.getElementsByClassName('tyo');
var pabtn = document.getElementsByClassName('pa');
var kekka = document.getElementById('kakka');

gubtn[0].addEventListener('click',function(){
  stop();
  if(btnFlg === 0){
    return ;
  }
  var aitenote = document.getElementById('aite');
  
  if(aitenote.children[1].id === 'ygu'){
    
    var p = document.createElement("p");
    p.setAttribute("id", "rsl");
    document.querySelector('#kekka').appendChild(p).textContent= "引き分け";
    vFlg = 0;
  }else if(aitenote.children[1].id === 'ytyo'){
    
    var p= document.createElement("p");
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent= "勝ち";
    vFlg +=1;
  }else if(aitenote.children[1].id === 'ypa'){
    
    var p = document.createElement("p");
    p.setAttribute("id", "rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "負け";
    vFlg  = 0;
  }

  btnFlg = 0;
 rensho();
});

tyobtn[0].addEventListener('click',function(){
  stop();
  if(btnFlg === 0){
    return;
  }
  var aitenote = document.getElementById('aite');
  
 
  

  if(aitenote.children[1].id === 'ygu'){
  
    var p = document.createElement("p");
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "負け";
    vFlg  = 0;
  }else if(aitenote.children[1].id === 'ytyo'){
    
    var p = document.createElement("p");
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "引き分け";
    vFlg  = 0;
  }else if(aitenote.children[1].id === 'ypa'){
    
    var p = document.createElement("p");
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "勝ち";
    vFlg +=1;
  }

  btnFlg = 0;
  rensho();
});

pabtn[0].addEventListener('click',function(){
  stop();
  if(btnFlg === 0){
    return;
  }
  var aitenote = document.getElementById('aite');
  
 

  if(aitenote.children[1].id === 'ygu'){
    
    var p = document.createElement("p");
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "勝ち";
    vFlg +=1;
    }else if(aitenote.children[1].id === 'ytyo'){
    
    var p = document.createElement("p")
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "負け";
    vFlg=0;
  }else if(aitenote.children[1].id === 'ypa'){
  
    var p = document.createElement("p");
    p.setAttribute("id","rsl");
    document.querySelector('#kekka').appendChild(p).textContent = "引き分け";
    vFlg  = 0;
  }

  btnFlg = 0;
  rensho();
});


function rensho(){
  
  var vZone = document.getElementById('vZone');

  if(vFlg>=2){
    
    
    vZone.textContent = vFlg + '連勝中です！';
    vZone.style.background = '#eb8686';
  }else if(vFlg == 0) {
    vZone.textContent = '';
    
  }
}


