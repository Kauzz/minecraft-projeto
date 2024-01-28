const botao = document.querySelector(".btn-plataforma")
const elementos = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", function() {
    elementos.classList.toggle("ativo");

    var seta = this.querySelector('.seta')
    seta.classList.toggle('rotated')
});

