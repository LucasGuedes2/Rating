var elemento = document.querySelectorAll("#list li");
for (var i = 0; i < elemento.length; i++){
    elemento[i].addEventListener("click", function(){
        Object.keys(elemento).forEach((item) =>{
            elemento[item].classList.remove("selecionado");
        })
        this.classList.toggle("selecionado");
        var rate = 0;
        rate = this.innerText;
        localStorage.setItem('valueRate', rate);
    })
}