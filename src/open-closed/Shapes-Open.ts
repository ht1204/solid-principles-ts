interface ShapeArea {
    getArea(): number;
}

export type Shape = Triangle | Rectangle | Circle;

export class Triangle implements ShapeArea {
    private base: number;
    private height: number;
    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    public getArea(): number {
        return this.base * this.height * 0.5
    }
}

export class Rectangle implements ShapeArea {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getArea(): number {
        return this.width * this.height;
    }
}


export class Circle implements ShapeArea {
    public radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return this.radius * Math.PI;
    }
}
