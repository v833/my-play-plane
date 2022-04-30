import { vi } from 'vitest';
import { beforeEach } from 'vitest';
import Bullet  from './Bullet';
import { describe, it, expect } from 'vitest';


describe('Bullet', () => {
  let bullet: Bullet;
  beforeEach(() => {
    bullet = new Bullet();
    bullet.speed = 1
    bullet.border = 0
  })
  it('move', () => {
    bullet.y = 1
    bullet.move()
    expect(bullet.y).toBe(0)
  })

  it('超过边界的时候回调, onDestroy', () => {
    bullet.x = 0
    bullet.y = 1

    bullet.onDestroy = vi.fn()

    bullet.move()

    expect(bullet.y).toBe(0)

  })
})