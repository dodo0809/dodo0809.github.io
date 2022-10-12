document.addEventListener("DOMContentLoaded", function () {
    const Berechne = document.querySelector(".Berechne");
    Berechne.addEventListener("click", () => {
    const a = document.querySelector(".Zeit").value;
    const b = document.querySelector(".Strecke").value;
    alert("Sie müssen " + b/a +" minuten pro kilometer laufen.")
    
    })
});

