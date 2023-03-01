export class Grid {
  constructor(width, heigth) {
  this.heigth=heigth;
  this.width=width;
  this.space = new Array(width*heigth);
  }
  set(vector, value) {
    this.space[vector.x + vector.y*this.width] = value;
    console.log('set', this.space)
  }
  get(vector) {
    this.space[vector.x + vector.y*this.width];
    console.log('get', vector.x + vector.y*this.width)
  }
  isInside(vector)  {
    return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;
  }
}

export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export function V(x, y){
  this.x = x;
  this.y = y;
}
