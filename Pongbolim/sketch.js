//variáveis bola
let xBola = 300;
let yBola = 200;
let diametro = 18;
let raio = diametro / 2

//variáveis velocidade
let velocidadexBola = 4;
let velocidadeyBola = 4;

//variáveis Time 1
let xRaquetesTime1 = [60, 400];
let yRaquetesTime1 = [170, 170];
let comprimentoRaquetes = 10;
let alturaRaquetes = 60;

//variáveis Time 2
let xRaquetesTime2 = [530, 190];
let yRaquetesTime2 = [170, 170];
let velocidadeYdooponente;

//variáveis Gol Time 1
let xGolTime1 = 5;
let yGolTime1 = 175;
let comprimentoGol = 4;
let alturaGol = 50;

//variáveis Gol Time 2
let xGolTime2 = 590;
let yGolTime2 = 175;

//mostrar pontos
let meusPontos = 0;
let pontosOponente = 0;

//sons
let raquetada;
let ponto;
let trilha;

let colidiu = false;
let colidiuGolTime1 = false;
let colidiuGolTime2 = false;

function preload(){
  torcida = loadSound ("somtorcida.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
  
}

function setup() {
  createCanvas(600, 400);
  torcida.loop();
}

function draw() {
  background(0);
  desenharCampo();
  mostraBola ();
  moveBola ();
  verificadorBorda();
  mostraRaquetesTime1(xRaquetesTime1, yRaquetesTime1);
  movimentoTime1();
  verificaColisaoTime1();
  mostraRaquetesTime2(xRaquetesTime2, yRaquetesTime2);
  movimentoTime2();
  verificarColisaoTime2();
  mostrarPlacar();
  pontuacao();
  mostraTraveTime1();
  mostraTraveTime2();
 
function mostraBola(){
  noStroke();
  fill (255)
  circle (xBola,yBola,diametro);
}  
  
function moveBola(){
  xBola += velocidadexBola;
  yBola += velocidadeyBola;
}   
  
function verificadorBorda(){
    if (xBola + raio > width || xBola - raio < 0){
    velocidadexBola *= -1
  }
  
  if (yBola + raio > height || yBola - raio < 0){
    velocidadeyBola *= -1
  } 
}  
  
function mostraRaquetesTime1(){
  noStroke();
  fill (0, 0, 205);
  for (let i = 0; i < xRaquetesTime1.length; i++){
  rect (xRaquetesTime1[i], yRaquetesTime1[i], comprimentoRaquetes, alturaRaquetes); 
  }
}

function mostraRaquetesTime2(){
  fill (255, 0, 0);
  for (let i = 0; i < xRaquetesTime2.length; i++){
  rect (xRaquetesTime2[i], yRaquetesTime2[i], comprimentoRaquetes, alturaRaquetes);
  }
}
  
function movimentoTime1 (){
  if (keyIsDown (UP_ARROW)){
  for (let i = 0; i < yRaquetesTime1.length; i++){
    yRaquetesTime1[i] -= 10;
  if (yRaquetesTime1[i] < -30){
    yRaquetesTime1[i] = -30
    }
   }
 }
}

  if (keyIsDown (DOWN_ARROW)){
  for (let i = 0; i < yRaquetesTime1.length;i++){
    yRaquetesTime1[i] += 10;
  if (yRaquetesTime1[i] > 370){
    yRaquetesTime1[i] = 370;
    }
  }
}
}

function movimentoTime2(){
  if (keyIsDown (87)){
  for (let i = 0; i< yRaquetesTime2.length; i++){
    yRaquetesTime2[i] -= 10;
  if (yRaquetesTime2[i] < -30){
    yRaquetesTime2[i] = -30;
   }
  }  
}
  if (keyIsDown (83)){
  for (let i = 0; i< yRaquetesTime2.length; i++){
    yRaquetesTime2[i] += 10;
  if (yRaquetesTime2[i] > 370){
    yRaquetesTime2[i] = 370;
}
}
}
}
  
function verificaColisaoTime1(){
  for (let i = 0; i < xRaquetesTime1.length; i++){
    colidiu = collideRectCircle(xRaquetesTime1[i], yRaquetesTime1[i], comprimentoRaquetes, alturaRaquetes, xBola, yBola, diametro);
  if (colidiu){
    velocidadexBola *= -1 
  }
  }
}

function verificarColisaoTime2(){
  for (let i = 0; i < xRaquetesTime2.length; i++){
    colidiu = collideRectCircle(xRaquetesTime2[i], yRaquetesTime2[i], comprimentoRaquetes, alturaRaquetes, xBola, yBola, diametro);

  if (colidiu){
    velocidadexBola *= -1;
  }
  }
}    

function mostrarPlacar(){
  stroke (255);
  textAlign (CENTER);
  textSize (20);
  fill (color(255,40,0));
  rect (50,5,50,20);
  fill (255);
  text (meusPontos, 75, 22);
  fill (color(255,40,0));
  rect (500, 5, 50, 20);
  fill (255);
  text (pontosOponente, 525, 22)
}
 
function pontuacao(){
  colidiuGolTime1 = collideRectCircle(xGolTime1, yGolTime1, comprimentoGol, alturaGol, xBola, yBola, diametro)
  colidiuGolTime2 = collideRectCircle(xGolTime2, yGolTime2, comprimentoGol, alturaGol, xBola, yBola, diametro)
  
  if(colidiuGolTime1){
    pontosOponente += 1
    ponto.play;
    xBola = 300
    yBola = 200
    for (let i = 0; i < yRaquetesTime1.length ; i++) {
      yRaquetesTime1[i] = 175
      yRaquetesTime2[i] = 175
    }
  }
  
  if(colidiuGolTime2){
    meusPontos += 1
    ponto.play;
    xBola = 300
    yBola = 200
    for(let i = 0; i < yRaquetesTime2.length ; i++) {
      yRaquetesTime1[i] = 175
      yRaquetesTime2[i] = 175
    }
  }
  
}
 

function mostraTraveTime1(){
  rect (xGolTime1, yGolTime1, comprimentoGol, alturaGol);
}

function mostraTraveTime2(){
  rect (xGolTime2, yGolTime2, comprimentoGol, alturaGol);
}

function desenharCampo(){
  
  //Campo
  fill (0,128,0);
  rect (5, 3, 590, 395);
  noFill (255);
  circle (300,200,100);
  stroke (255);
  line (300, 3, 300, 396);
  arc(5, 3, 25, 25, 0, HALF_PI);
  arc (595, 3, 25, 25, HALF_PI, PI);
  arc (5, 397, 25, 25, PI + HALF_PI, 0);
  arc (595, 397, 25, 25, PI, PI + HALF_PI);
  
  // grande e pequena área
  noFill (255);
  rect (5,90,88,220);
  rect (5, 150, 30, 100);
  rect (1, 180, 5, 40);
  rect (505, 90, 90, 220);
  rect (565, 150, 30, 100);
  rect (595, 180, 5, 40);
  arc(94, 200, 40, 80, (PI * 3)/2, PI/2);
  arc(505, 200, 40, 80,PI/2, (PI * 3)/2);
  
  //pontos 
  stroke (255)
  point (83, 200);
  point (517, 200);
}