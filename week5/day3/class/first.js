class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
}
  
const rectangle = new Rectangle(5, 7);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
  