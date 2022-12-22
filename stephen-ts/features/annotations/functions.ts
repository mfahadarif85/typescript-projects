const add = (a: number, b: number) => {
  return a + b;
};

// return value is inferred as void
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// TS can also infer return value as never
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// const logWeather = (forecast: { date: Date; weather: string }) => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// destructuring
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
