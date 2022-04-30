import Bullet  from './Bullet';
import { describe, it, expect } from 'vitest';


describe('Bullet', () => {
  it('move', () => {
    const bullet = new Bullet()
    bullet.y = 1
    bullet.move()
    expect(bullet.y).toBe(0)
  })
})