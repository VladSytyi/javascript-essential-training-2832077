/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const engine = {
  type: "V4",
  size: 1.8,
  fuel: "Gasoline",
};

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2018,
  color: "white",
  engine: engine,
  features: ["Bluetooth", "Backup Camera", "Cruise Control"],
};
