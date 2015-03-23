function makeCanvas() {
  /* canvas1 */
  // 1 - Achar o elemento canvas
  var canvas1 = document.getElementById('canvas1');
  var ctx1 = canvas1.getContext('2d');
  // 2 - Configurar par?etros ou propriedades
  ctx1.font = '32pt Arial';
  ctx1.fillStyle = 'DeepSkyBlue';
  ctx1.strokeStyle = 'black';
  // A?o - desenhar uma linha
  ctx1.fillText("I love HTML5", 45, 150);
  ctx1.strokeText("I love HTML5", 45, 150);
  
  /* canvas2 */
  // 
  var canvas2 = document.getElementById('canvas2');
  var ctx2 = canvas2.getContext('2d');
  // 
  // -- quadrado vermelho com borda preta
  ctx2.fillStyle = '#ff0000';
  ctx2.strokeStyle = '#000000';
  ctx2.lineWidth = 10;
  // 
  ctx2.fillRect(45, 5, 135, 135);
  ctx2.strokeRect(45, 5, 135, 135);
  // -- quadrado cinza sem borda
  ctx2.fillStyle = '#666666';
  // 
  ctx2.fillRect(200, 0, 135, 135);
  // -- quadrado cinza sem borda
  ctx2.fillStyle = '#666666';
  // 
  ctx2.fillRect(45, 150, 135, 135);
  // -- quadrado vermelho com borda preta
  ctx2.fillStyle = '#ff0000';
  ctx2.strokeStyle = '#000000';
  // 
  ctx2.fillRect(200, 155, 135, 135);
  ctx2.strokeRect(200, 155, 135, 135);
  
  /* canvas3 */
  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');
  //
  ctx3.strokeStyle = "#666666";
  ctx3.fillStyle = "#ff0000";
  ctx3.lineWidth = 5;
  //
  ctx3.beginPath();
  ctx3.moveTo(100,100);
  ctx3.lineTo(150,200);
  ctx3.lineTo(200,200);
  ctx3.lineTo(200,290);
  ctx3.lineTo(290,290);
  ctx3.lineTo(290,100);
  ctx3.lineTo(100,100)
  ctx3.fill();
  ctx3.stroke();
  ctx3.closePath();
  
  /* canvas4 */
  var canvas4 = document.getElementById('canvas4');
  var ctx4 = canvas4.getContext('2d');
  // -- c?culo azul de raio 25px
  ctx4.fillStyle = "blue";
  ctx4.beginPath();
  ctx4.arc(200, 30, 25, 0, 2*Math.PI);
  ctx4.fill();
  ctx4.closePath();
  // -- c?culo vermelho de raio 45px
  ctx4.fillStyle = "red";
  ctx4.beginPath();
  ctx4.arc(200, 100, 45, 0, 2*Math.PI);
  ctx4.fill();
  ctx4.closePath();
  // -- c?culo preto de raio 45px
  ctx4.fillStyle = "black";
  ctx4.beginPath();
  ctx4.arc(200, 220, 75, 0, 2*Math.PI);
  ctx4.fill();
  ctx4.closePath();
  
  /* canvas5 */
  var canvas5 = document.getElementById('canvas5');
  var ctx5 = canvas5.getContext('2d');
  // -- uma anima?o com c?culos
  var posX = 0;
  var posY = 0;
  setInterval(function(){
    posX++;
    posY++;
    // fundo preto
    ctx5.fillStyle = "black";
    ctx5.fillRect(0, 0, canvas5.width, canvas5.height);
    // c?culo branco
    ctx5.fillStyle = "white";
    ctx5.beginPath();
    ctx5.arc(posX, 100, 40, 0, 2*Math.PI);
    ctx5.fill();
    ctx5.closePath();
    // c?culo vermelho
    ctx5.fillStyle = "red";
    ctx5.beginPath();
    ctx5.arc(120, posY, 50, 0, 2*Math.PI);
    ctx5.fill();
    ctx5.closePath();
    // c?culo azul
    ctx5.fillStyle = "blue";
    ctx5.beginPath();
    ctx5.arc(250, posY, 50, 0, 2*Math.PI);
    ctx5.fill();
    ctx5.closePath();
    // quadrado verde-oliva
    ctx5.fillStyle = "green";
    ctx5.strokeStyle = "olive";
    ctx5.lineWidth = 3;
    ctx5.fillRect(posX, canvas5.width - posY, 100, 120);
    ctx5.strokeRect(posX, canvas5.width - posY, 100, 120);
  }, 30);
}