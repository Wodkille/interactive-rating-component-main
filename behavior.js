const submitBtn = document.getElementById("submitBtn");
let valor = 0;

function namee() {
  let container1 = document.getElementById("container");
  let container2 = document.getElementById("container2");

  let valors = document.getElementById("valors");


  if (valor == 0) {
    alert("debe seleccionar un valor")
  } else {
    valors. innerHTML = valor;
    container1.style.visibility = "hidden";
    container2.style.visibility = "visible";
  }

  };


  function marcaColor(id) {

  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let btn5 = document.getElementById("btn5");


    let btn = document.getElementById(String(id));
    btn.style.backgroundColor = "#e6f2ff";
 

 if (id == "btn1") {
 btn2.style.backgroundColor = "#31373f";
 btn3.style.backgroundColor = "#31373f";
 btn4.style.backgroundColor = "#31373f";
 btn5.style.backgroundColor = "#31373f";
 valor = 1;
 } else if(id == "btn2") {
  btn1.style.backgroundColor = "#31373f";
  btn3.style.backgroundColor = "#31373f";
  btn4.style.backgroundColor = "#31373f";
  btn5.style.backgroundColor = "#31373f";
  valor = 2;
 } else if (id == "btn3") {
  btn1.style.backgroundColor = "#31373f";
  btn2.style.backgroundColor = "#31373f";
  btn4.style.backgroundColor = "#31373f";
  btn5.style.backgroundColor = "#31373f";
  valor = 3;
 } else if (id == "btn4") {
  btn1.style.backgroundColor = "#31373f";
  btn2.style.backgroundColor = "#31373f";
  btn3.style.backgroundColor = "#31373f";
  btn5.style.backgroundColor = "#31373f";
  valor = 4;
 } else if (id == "btn5") {
  btn1.style.backgroundColor = "#31373f";
  btn2.style.backgroundColor = "#31373f";
  btn3.style.backgroundColor = "#31373f";
  btn4.style.backgroundColor = "#31373f";
  valor = 5;
}

 
  };

  

  