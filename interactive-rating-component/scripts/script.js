button = document.querySelector(".card-button")
cardVerso = document.querySelector(".card-verso")
cardFront = document.querySelector(".card-front")

button.addEventListener("click", function(){
    console.log("Botão disparado")
    cardVerso.classList.remove("hidden")
    cardFront.classList.add("hidden")
})