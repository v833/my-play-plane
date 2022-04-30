import { describe, it, expect, beforeEach} from "vitest";
import Bullet from "./Bullet";
import { IPlane, setupPlane } from "./Plane";

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
    let plane: IPlane
    beforeEach(() => {
      plane = createPlane();
    })
    it('moveDown', () => {
      plane.moveDown()
      expect(plane.y).toBe(1)
    })
    it('moveUp', () => {
      plane.moveUp()
      expect(plane.y).toBe(-1)
    })
    it('moveLeft', () => {
      plane.moveLeft()
      expect(plane.x).toBe(-1)
    })
    it('moveRight', () => {
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

    it('子弹超过边界后移除', () => {
      const bullets = []
      const plane = setupPlane({}, bullets, {x: 0, y: 0})
      plane.attack()
      plane.run()

      expect(bullets.length).toBe(0)
    })
  })
});
