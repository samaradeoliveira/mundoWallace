//construção da classe Box
class Box {
  constructor(x, y, w, h) {
    //propriedades do objeto

    //código para ficar parado
    let options = {
      friction: 0.3,
      restitution: 0.6
    };

    //corpo
    this.body = Bodies.rectangle(x, y, w, h, options);
    //medidas separadas 
    this.w = w;
    this.h = h;

    //adicionar ao mundo
    World.add(world, this.body);
  }

  //método para exibir o objeto
  show() {
    //variável que pega as posições do objeto
    let pos = this.body.position;

    //variável que pega o ângulo do objeto
    let angle = this.body.angle;


    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);
    pop();
  }
}