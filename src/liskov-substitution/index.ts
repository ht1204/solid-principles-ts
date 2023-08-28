import { Rectangle, Square } from "./ShapesInheritance";
//import { Rectangle, Square } from "./ShapesLiskov";

const rectangle = new Rectangle();
rectangle.setWidth(100);
rectangle.setHeight(50);
console.log("Rectangle Area: "+ rectangle.getArea());

const square = new Square();
square.setWidth(100);
square.setHeight(50);
console.log("Square Area: " + square.getArea());



// Liskov Substitution
// const rectangle = new Rectangle();
// rectangle.setWidth(100);
// rectangle.setHeight(50);
// console.log("Rectangle Area: "+ rectangle.getArea());

// const square = new Square(50);
// console.log("Square Area: " + square.getArea());
