//variavel bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

//variavel velocidade da bolinha
let velocidadeX = 5;
let velocidadeY = 6;
let raio = diametro / 2;

//variavel raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//varivavel raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente= 150;
let velocidadeYoponente 

//variavel colisao da raquete
let colidiu = false

//variavel placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
bolinha();
velocidadeDaBolinha();
mostraRaquete(xRaquete,yRaquete);
movimentoRaquete();
colisaoRaquete(xRaquete, yRaquete);
mostraRaquete(xRaqueteOponente,yRaqueteOponente);
movimentaRaqueteOponente();
colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
incluiPlacar();
marcaPonto();


} 
  //bolinha
  function bolinha(){
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
  }
  
  //velocidade bolinha
  function velocidadeDaBolinha(){
  if (xBolinha + raio> width ||
     xBolinha - raio < 0){
    velocidadeX *= -1;
  }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeY *= -1;
  }
  }
  

//Raquete
  function mostraRaquete(x,y){
  rect (x, y ,raqueteComprimento, raqueteAltura);
  }

//raquete principal
  function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
      }
  }
  
//raquete movimento oponente
function movimentaRaqueteOponente(){
  velocidadeYoponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYoponente;
}


//colisao raquete principal e oponente
  function colisaoRaquete(x,y){
 colidiu =   collideRectCircle(x ,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
      velocidadeX *= -1;
    }
  }

//Placar
function incluiPlacar (){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color (255 , 140 ,0));
  rect (150, 10 , 40 ,20);
  fill(255);
  text(meusPontos, 170 , 26);
  fill(color (255, 140, 0));
  rect(450, 10, 40 , 20);
  fill(255);
  text(pontosOponente, 470  , 26);
}

//Marca Placar
function marcaPonto (){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

