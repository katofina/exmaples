class Shape {
  color: Color;
  shape?: string;
  constructor(color: Color) {
    this.color = color;
  }
  getShape() {
    console.log(`Shape: ${this.shape}, color: ${this.color.getColor()}`); //Delegate the opertaion to the class Color
  }
} //Abstraction

class Circle extends Shape {
  shape: string;
  constructor(color: Color) {
    super(color);
    this.shape = "circle";
  }
}

class Square extends Shape {
  shape: string;
  constructor(color: Color) {
    super(color);
    this.shape = "square";
  }
}

class Color {
  color: string;
  constructor() {
    this.color = "black";
  }
  getColor() {
    return this.color;
  }
}

class RedColor extends Color {
  constructor() {
    super();
    this.color = "red";
  }
}

class BlueColor extends Color {
  constructor() {
    super();
    this.color = "blue";
  }
}

const redCircle = new Circle(new RedColor());
const blueSquare = new Square(new BlueColor());

redCircle.getShape();
blueSquare.getShape(); //use
