const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// const pepsi:[string, boolean, number] = ['brown', true, 40]

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

// tuples have less usecases

const carSpecs: [number, number] = [400, 3354];

// objects can represent data more meaningfully
const carSpecs2 = {
  horsepower: 400,
  weight: 3354,
};
