import {Vector, Grid, V} from './grid.js'

var grid = new Grid(5, 5);
console.log(grid.get(new Vector(0, 1)));
grid.set(new Vector(0, 1), "X"); 
console.log(grid.get(new Vector(0, 1))); 
console.log(grid.space[5])
