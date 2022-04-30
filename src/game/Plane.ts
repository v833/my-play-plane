import Bullet from "./Bullet";

export interface IPlane {
  x: number;
  y: number;
  speed: number;
  moveDown(): void;
  moveUp(): void;
  moveLeft(): void;
  moveRight(): void;
  attack(): void;
  run(): void;
}

const defineOptions = {
  x: 0,
  y: 0,
  speed: 10,
};

export function setupPlane(plane, bullets: Bullet[], options?): IPlane {
  // init
  plane.bullets = bullets ?? [];
  Object.assign(plane, defineOptions, options);

  initRun(plane, bullets)
  initMove(plane);
  initAttack(plane, bullets);

  return plane;
}

function initRun(plane, bullets) {
  plane.run = function () {
    bullets.forEach((bullet) => {
      bullet.move();
    });
  };
}

function initMove(plane: IPlane) {
  plane.moveDown = function () {
    plane.y += plane.speed;
  };
  plane.moveUp = function () {
    plane.y -= plane.speed;
  };
  plane.moveLeft = function () {
    plane.x -= plane.speed;
  };
  plane.moveRight = function () {
    plane.x += plane.speed;
  };
}

function initAttack(plane, bullets) {
  plane.attack = function () {
    const bullet = new Bullet();
    bullet.x = plane.x + 20;
    bullet.y = plane.y;
    bullets.push(bullet);
  };
}
