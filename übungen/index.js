const list = new Array();

document.addEventListener("DOMContentLoaded", function () {
    const b = document.querySelector(".button");
    b.addEventListener("click", () => {
        const c = document.querySelector(".text").value;
        const d = document.querySelector(".select").value;    
       
        list.push(c + d);
        printShoppingList(); 
    const e = document.querySelector(".output");
    const b = document.querySelector(".delete");
    b.addEventListener("click", () => {
        e.innerHTML = ""
        list.length = 0

    })})
})

function printShoppingList() {
    const e = document.querySelector(".output"); 
    e.innerHTML = "";
    console.log(list);
    for(let i = 0; i<list.length; i ++) { 
        e.innerHTML += list[i] + "<br>";

    }
}
