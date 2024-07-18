var x=0;var f;
function movetrain(){
    x=x+100;
    document.getElementById('train').style.transform=`translateX(${x}px)`;
}
const move=function (){
    f=setInterval(movetrain,1000);
}
const stop=function (){
    clearInterval(f);
}
const restart=function(){
    document.getElementById('train').style.transform=`translateX(${0}px)`;
}
document.getElementById("start").addEventListener("click",move);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("restart").addEventListener("click",restart);






