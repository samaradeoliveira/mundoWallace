//importando MÓDULOS e renomeando "namespacing"
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variáveis
var engine, world;
var ball, ground;
var angle = 60;

//configuração
function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  //propriedades da bola
  var ball_options = {
    restitution: 0.95, //saltitar
    frictionAir: 0.01 //atrito com o ar
  };

  //propriedade do chão
  var options = {
    isStatic: true //para deixar o objeto parado
  };

  //corpo da bola
  ball = Bodies.circle(100, 10, 20, ball_options);
  //adicionando no mundo
  World.add(world, ball);

  //corpo do chão
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  //adicionando no mundo o objeto criado
  World.add(world, ground);

  //corpo da wall(parede) -- aluno




  //centraliza o chão
  rectMode(CENTER);
  //aumenta o raio da bola
  ellipseMode(RADIUS);
}


function draw() {
  background("SpringGreen");

  //atualização da física
  Engine.update(engine);

  //pintando a bola e o chão
  fill("blue");
  ellipse(ball.position.x, ball.position.y, 20);
  fill("magenta");
   rect(ground.position.x, ground.position.y, 400, 20);

  //exibir a parede

}

