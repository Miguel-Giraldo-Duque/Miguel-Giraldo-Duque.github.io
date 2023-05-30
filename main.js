let yes = document.getElementById("text2")
let texto = document.getElementById("result")
let texto2 = document.getElementById("result2")


yes.addEventListener("click", function(event){
    event.preventDefault()
    insert_days_training(yes)
})

// Este bloque va ser el encargado de mostrar los dias entrenados hasta el momento  //

function insert_days_training() {
    let get_counter = localStorage.getItem("days_training")
    var counter = parseInt(texto.innerHTML + get_counter)
    counter += 1 
    texto.innerHTML = counter + " dias entrenados"
    var counterInText = JSON.stringify(counter)
    let saved_counter = localStorage.setItem("days_training" , counterInText)
    

}

let data = localStorage.getItem("days_training")




