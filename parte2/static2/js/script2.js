
function changelikevalue1(){
    let numerostring= document.querySelectorAll('span')
    let numeroint = parseInt(numerostring[0].innerHTML);
    numeroint+= 1;
    numerostring[0].innerHTML= numeroint;
}
function changelikevalue2(){
    let numerostring= document.querySelectorAll('span')
    let numeroint = parseInt(numerostring[1].innerHTML);
    numeroint+= 1;
    numerostring[1].innerHTML= numeroint;
}
function changelikevalue3(){
    let numerostring= document.querySelectorAll('span')
    let numeroint = parseInt(numerostring[2].innerHTML);
    numeroint+= 1;
    numerostring[2].innerHTML= numeroint;
}
let elemento= document.querySelectorAll('button');
elemento[0].addEventListener("click",changelikevalue1)
elemento[1].addEventListener("click",changelikevalue2)
elemento[2].addEventListener("click",changelikevalue3)

/* otro metodo
var likes= [9,12,9];
var spans = [document.querySelector('#like1'),document.querySelector('#like2'),document.querySelector('#like3')]

function changelike(index){
    likes[index]++;
    spans[index].innerHTML = likes[index];
}*/