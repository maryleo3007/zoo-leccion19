var img = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.onchange = function(){
    var valor = select.value;
        if(valor == "original"){
          for(var i = 0; i < img.length ; i++){
              img[i].classList.remove("sepia");
              img[i].classList.remove("blanco-negro")
              img[i].classList.remove("invertir-colores")
          }
        }
        if(valor == "sepia"){
          for(var i = 0; i < img.length ; i++){
              img[i].classList.add("sepia");
              img[i].classList.remove("blanco-negro")
              img[i].classList.remove("invertir-colores")
          }
        }

        if(valor == "blanco-negro"){
          for(var i = 0; i < img.length ; i++){
              img[i].classList.add("blanco-negro");
              img[i].classList.remove("sepia")
              img[i].classList.remove("invertir-colores")
          }
        }
        if(valor == "invertir-colores"){
          for(var i = 0; i < img.length ; i++){
              img[i].classList.add("invertir-colores");
              img[i].classList.remove("blanco-negro")
              img[i].classList.remove("sepia")
          }
        }
}
