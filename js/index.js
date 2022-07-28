window.onload = function () {

  var car = document.getElementById("car");
  car.style.left = "890px"
  car.style.top = "850px"


  document.getElementById("start-button").onclick = function () {
    startGame();

  };

  function startGame() {

    var body = document.getElementById("game-board");
    body.innerHTML += '<canvas id="road"> </canvas>'
    app.init();



  }
};
document.addEventListener("keyup", myScript);

function myScript(e) {



  if (e.keyCode == 37) {


    var position = parseInt(car.style.left) - 20 + "px";
    if (position == "590px") {

    } else {
      car.style.left = position

    }



  }
  if (e.keyCode == 39) {
    var position = parseInt(car.style.left) + 20 + "px";
    if (position == "590px") {
      console.log("Fin")
    } else {
      car.style.left = position
      console.log(position)
    }

  }
}



var app = {
  init: function () {

    var w = window.innerWidth
    var h = window.innerHeight

    var canvas = document.querySelector("#road")


    canvas.setAttribute("width", w)
    canvas.setAttribute("height", h)


    var ctx = canvas.getContext('2d');

    function line(n1, n2, n3, n4, line, color) {

      ctx.beginPath()
      ctx.moveTo(n1, n2)
      ctx.lineTo(n3, n4)

      ctx.lineWidth = line;

      ctx.strokeStyle = color;
      ctx.closePath();
      ctx.stroke()
    }


    function drawSquares(n1, n2, n3, n4, color) {
      ctx.fillStyle = color
      ctx.fillRect(n1, n2, n3, n4);

    }



    drawSquares(600, 0, 800, 900, "green")
    drawSquares(700, 0, 600, 900, "grey")



    line(750, 0, 750, 900, 10, "white")

    line(1250, 0, 1250, 900, 10, "white")


    for (var a = 0; a < 10; a++) {

      drawSquares(980, a * 150, 10, 100, "white")
    }
    var a = 0;



    var colision = false;
    setInterval(function () {

      ctx.clearRect(0, 0, 1000, 1000)


      drawSquares(600, 0, 800, 900, "green")
      drawSquares(700, 0, 600, 900, "grey")

      line(750, 0, 750, 900, 10, "white")
      line(1250, 0, 1250, 900, 10, "white")

      for (var b = 0; b < 10; b++) {

        drawSquares(980, b * 150, 10, 100, "white")
      }
      ctx.fillStyle = "red"
      ctx.fillRect(600, a * 15, 400, 20)

      ctx.fillStyle = "blue"
      var b = a * 4 * 15
      ctx.fillRect(1000, a * 4 * 15, 400, 20)

      a++



      if (a > 22 && parseInt(car.style.left) < 1010) {

        alert("colision")
      }
    }, 300)





  }
}
