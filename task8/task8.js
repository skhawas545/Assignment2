document.getElementById("button").addEventListener("click",sort);
function sort(){
    let word=document.getElementById("input").value;
    let sort=word.split("").sort().join("");
    console.log(sort);
    const para=document.createElement("p");
    para.textContent="SORT-WORD:"+sort;
    document.querySelector("body").append(para);
}