function countlike(){
    console.log("entre a la funcion")
    let spancito= document.querySelector('.likes');
    let numeroint= parseInt(spancito.innerHTML);
    numeroint += 1;
    spancito.innerHTML=numeroint;
}
let elem = document.querySelector('button');
elem.addEventListener("click",countlike); //llamo a la funcion no colocar parentesis de argumentos