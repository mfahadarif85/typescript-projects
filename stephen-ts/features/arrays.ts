const carMakers: string[] = ["ford", "toyota", "chevy"];

const carMakers2: any[] = [];

carMakers2.push("hello");

const date = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string) => {
  return car.toLowerCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-11");
importantDates.push(new Date());
