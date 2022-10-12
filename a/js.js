document.addEventListener("DOMContentLoaded", function () {
    const Berechne = document.querySelector(".Berechne");
    Berechne.addEventListener("click", () => {
        const a = document.querySelector(".Zeit").value;
        const b = document.querySelector(".Strecke").value;
        const ergebnis = b/a;
        const c = document.querySelector("#ergebnis");       
        if (isNaN(ergebnis)){
            c.innerHTML= "not a number"
        }
        else{
            c.innerHTML = ergebnis;
        }
    })
});