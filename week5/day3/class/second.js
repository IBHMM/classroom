class Shape {
    calculateArea() {
      return "404 :)";
    }
 }
  
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}
  
class Rectangle extends Shape {
   constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
   }

   calculateArea() {
     return this.width * this.height;
   }
}

const circle = new Circle(5);
console.log(circle.calculateArea());

const rectangle = new Rectangle(5, 7);
console.log(rectangle.calculateArea());