document.getElementById("button").addEventListener("click",reverse);
function reverse(){
    let number=document.getElementById("input").value;
    let length=number.length;
    let reverse="";
    for(let i=length-1;i>=0;i--){
        reverse=reverse+number[i];
    }
    const para=document.createElement("p");
    para.textContent="REVERSE NUMBER:"+reverse;
    document.querySelector("body").append(para);
}