import { Rectangle, Triangle, Circle } from "./Shapes";
//import { Rectangle, Triangle, Circle, Shape } from "./Shapes-Open";

function computeAreasOfShapes(
    shapes: Array<Rectangle | Triangle | Circle>
) {
    return shapes.reduce(
        (computedArea: any, shape: Rectangle | Triangle | Circle) => {
            if (shape instanceof Rectangle) {
                const areaRectangle = shape.width * shape.height;
                console.log(`Area Rectangle: ${areaRectangle}`);
                computedArea += areaRectangle;
            }
            if (shape instanceof Triangle) {
                const areaTriangle = shape.base * shape.height * 0.5;
                console.log(`Area Triangle: ${areaTriangle}`);
                computedArea += areaTriangle;
            }
            if (shape instanceof Circle) {
                const areaCircle = shape.radius * Math.PI;
                console.log(`Area Circle: ${areaCircle}`);
                computedArea += areaCircle;
            }
            return computedArea;
        }, 0);
}


// open-closed

// function computeAreasOfShapes(
//     shapes: Shape[]
// ) {
//     return shapes.reduce(
//         (computedArea, shape) => {
//             return computedArea + shape.getArea();
//         },
//         0
//     );
// }


const rectangle = new Rectangle(1, 5);
const triangle = new Triangle(1, 4);
const circle = new Circle(1);

const areas = computeAreasOfShapes([rectangle, triangle, circle]);
console.log(areas);






