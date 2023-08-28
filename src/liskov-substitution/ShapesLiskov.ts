interface ShapeArea {
    getArea(): number;
}

export class Rectangle implements ShapeArea {
    protected width!: number;
    protected height!: number;

    public setWidth(width: number) {
        this.width = width;
    }
    public setHeight(height: number) {
        this.height = height;
    }

    public getArea() {
        return this.width * this.height;
    }
}

export class Square implements ShapeArea {
    constructor(private _height: number) { }

    public getArea(): number {
        return Math.pow(this._height, 2);
    }
}
