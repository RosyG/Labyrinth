window.onload = function() {
  document.onkeyup = muestraInformacion;
}

function muestraInformacion(e) {
  var evento = window.event || e;
  var keyCode =evento.keyCode;

console.log(keyCode);
  info.innerHTML + keyCode;

  var up = 38;
  var right =39;
  var down = 40;
  var left = 37;
  if (keyCode==up) {
    moveUp();
  }if (keyCode==right) {
    moveRight();
  }if (keyCode==down){
    moveDown();
  }if (keyCode==left){
    moveLeft();
  }else{
    console.log("no es arriba");
  }


}


var position=0;

function moveUp (){
  position= position+56;
  console.log(position);
  var teseo = document.getElementById("teseo");
  teseo.style.bottom=position+"px";
}

function moveDown (){
  position= position-56;
  console.log(position);
  var teseo = document.getElementById("teseo");
  teseo.style.bottom=position+"px";
}
function moveRight (){
  position= position+56;
  console.log(position);
  var teseo = document.getElementById("teseo");
  teseo.style.left=position+"px";
}
function moveLeft (){
  position= position-56;
  console.log(position);
  var teseo = document.getElementById("teseo");
  teseo.style.left=position+"px";
}
