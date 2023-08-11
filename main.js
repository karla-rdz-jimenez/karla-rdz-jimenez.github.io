let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth
let intervalo = 4000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        },1500)
    }
}

function muestra_oculta(id){
  let div = document.getElementById(id);
  if(div.style.display == "none"){
      div.style.display = "flex";
  }else{
      div.style.display = "none";
  }
}