import { describe, it, expect} from "vitest";
import Bullet from "./Bullet";
import { setupPlane } from "./Plane";

describe("Plane", () => {
  describe("move", () => {
    const defaultOptions = {
      x: 0,
      y: 0,
      speed: 1
    }
    function createPlane() {
      return setupPlane({},[], defaultOptions);
    }
    it('moveDown', () => {
      const plane = createPlane();
      
      plane.moveDown()

      expect(plane.y).toBe(1)
    })
    it('moveUp', () => {
      const plane = createPlane();

      plane.moveUp()

      expect(plane.y).toBe(-1)
    })
    it('moveLeft', () => {
      const plane = createPlane();

      plane.moveLeft()

      expect(plane.x).toBe(-1)
    })
    it('moveRight', () => {
      const plane = createPlane();

      plane.moveRight()

      expect(plane.x).toBe(1)
    })
  });
  describe('攻击', () => {
    it('attack', () => {
      const bullets = []
      const plane = setupPlane({}, bullets)

      plane.attack()

      expect(bullets.length).toBe(1)

    })
  })
  describe('run', () => {
    it('移动所有的子弹', () => {
      const bullet = new Bullet()
      bullet.y = 0
      const plane = setupPlane({}, [bullet])

      plane.run()
      expect(bullet.y).not.toBe(0)
    })
  })
});
