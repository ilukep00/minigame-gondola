var x = 0;
var y = 0;
var cont = 0;
var carril = 3;
var imagen;
var window_height = window.innerWidth*0.98;
var posJeringas = [];
var mode;
function mover(event) {
    imagen = document.getElementById("img-gondola");
    if (event.keyCode == "39") {
      if(x < window_height-100){
        x = x + 100; //derecha
      }
      imagen.style.left = x + "px";
      checkwin();
    }
    if (event.keyCode == "37") {
      if (x > 99)  
        x = x - 100; //Izquierda
      imagen.style.left = x + "px";
      checkwin();
    }
    if (event.keyCode == "38") {
      document.getElementById("carril-"+carril).removeChild(imagen);
      if(carril > 1)
        carril = carril -1; //Arriba
      document.getElementById("carril-"+carril).appendChild(imagen);
      checkwin();
    }
    if (event.keyCode == "40") {
      document.getElementById("carril-"+carril).removeChild(imagen);
      if(carril < 5)  
        carril = carril + 1;  //Abajo
      document.getElementById("carril-"+carril).appendChild(imagen);
      checkwin();
    }
  }
  function checkwin(){
    for(var i = 0; i < posJeringas.length; i++){
      if((posJeringas[i][0] == carril) && ((posJeringas[i][1] == x) )){
        window.alert("You lose!! :(");
        for(var j = 1; j <= 5; j++){
          document.getElementById("carril-"+j).innerHTML = "";
        }
        posJeringas = [];
        carril = 3;
        x = 0;
        imagen.style.left = x + "px";
        document.getElementById("carril-"+3).appendChild(imagen);
        return -1;
      }
    }
    if(x > window_height -100){
      cont ++;
      window.alert("YOU WIN!! :)");
      document.getElementById("cont").innerHTML = "WINS:"+cont;
      for(var j = 1; j <= 5; j++){
        document.getElementById("carril-"+j).innerHTML = "";
      }
      posJeringas = [];
      carril = 3;
      x = 0;
      imagen.style.left = x + "px";
      document.getElementById("carril-"+3).appendChild(imagen);
      return 1;
    }
    let new_j = getRandomArbitrary(0, 4);
    for(var z = 0; z < new_j; z++){
      addJeringa();
    }
  }
  window.onkeyup = mover;

  function addJeringa(){
    let arbitraryCarril= getRandomArbitrary(1, 6);
    let ArbitraryX;
    if(mode == "Easy"){
       ArbitraryX =  getRandomArbitrary(0, (window_height-100)/100)*100;
    }else{
       ArbitraryX =  getRandomArbitrary((x/100)+1, (window_height-100)/100)*100;
    }
    if(ArbitraryX != -100 && ArbitraryX != x){
      posJeringas.push([arbitraryCarril,ArbitraryX]);
      let miImagen = document.createElement("img");
      miImagen.src = "jeringa.png";
      miImagen.className = "img-jeringa";
      miImagen.style.left = ArbitraryX+"px";
      console.log('hola');
      document.getElementById("carril-"+arbitraryCarril).appendChild(miImagen);
    }
  }

  function getRandomArbitrary(min, max) {
    if(min < max)
      return Math.floor(Math.random() * (max - min) + min);
    else
      return -1;
  }

  function insertMode(){
    if(x > 0){
      alert("You cannot change the mode, when the game is started");
      if(document.getElementById("select-modo").value == "Easy"){
        document.getElementById("select-modo").value = "Difficult";
      }else{
        document.getElementById("select-modo").value = "Easy";
      }
    }
    else{
      mode = document.getElementById("select-modo").value;
      alert("MODE SELECTED: "+mode);
    }
    
  }