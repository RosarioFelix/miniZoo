var img= document.getElementsByClassName('animal');

var select = document.getElementById('select');
select.onchange = function(){
  if(select.value == "original"){
    for(var i = 0; i<img.length; i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
    }
  }
  if(select.value == "blanco-negro"){
    for(var j = 0; j<img.length; j++){
      img[j].classList.add("blanco-negro")
      img[j].classList.remove("original");
      img[j].classList.remove("invertir-colores");
      img[j].classList.remove("sepia");
    }
  }
  if(select.value == "sepia"){
    for(var h = 0; h<img.length; h++){
      img[h].classList.add("sepia")
      img[h].classList.remove("original");
      img[h].classList.remove("invertir-colores");
      img[h].classList.remove("blanco-negro");
    }
  }
  if(select.value == "invertir-colores"){
    for(var h = 0; h<img.length; h++){
      img[h].classList.add("invertir-colores")
      img[h].classList.remove("original");
      img[h].classList.remove("sepia");
      img[h].classList.remove("blanco-negro");
    }
  }

}
