let x = 0;
let y = 0;
let cont = 0;
let carril = 3;
let imagen;
let window_height = window.innerWidth*0.98;
let posJeringas = [];
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
    console.log(new_j);
    for(var z = 0; z < new_j; z++){
      addJeringa();
    }
  }
  window.onkeyup = mover;

  function addJeringa(){
    let arbitraryCarril= getRandomArbitrary(1, 6);
    let ArbitraryX =  getRandomArbitrary((x/100)+1, 11)*100;
    console.log(x)
    console.log(ArbitraryX);
    if(ArbitraryX != -100){
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