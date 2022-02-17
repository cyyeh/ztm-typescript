class Vehicle {
  constructor(private _color: string) {}

  public get color(): string {
    return this._color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(private _wheels: number, color: string) {
    super(color);
  }

  public get wheels(): number {
    return this._wheels;
  }

  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'yellow');
car.startDrivingProcess();
console.log(car.color);
console.log(car.wheels);
