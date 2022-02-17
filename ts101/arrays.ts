const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['f180'],
]

// why typed arrays
// 1) typescript can do type inference when extracting values from an array
const firstCar = carMakers[0];
const myCar = carMakers.pop();

// 2) typescript can prevent us from adding incompatible values to the array
carMakers.push(100);

// 3) we can get help with 'map', 'forEach', 'reduce' functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4) flexible: arrays can still contain multiple different types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
