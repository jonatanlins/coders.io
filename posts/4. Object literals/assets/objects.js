const person = {
  name: "Rihanna",
  age: 32,
  occupations: ["Singer", "Songwriter"],
};

////////////////////////////////////////////////////////////////////////////////

const operation = "sum";
const a = 5;
const b = 3;

switch (operation) {
  case "sum":
    console.log(a + b);
    break;

  case "subtraction":
    console.log(a - b);
    break;
}

////////////////////////////////////////////////////////////////////////////////

const operation = "sum";
const a = 5;
const b = 3;

const operations = {
  sum: () => {
    console.log(a + b);
  },
  subtraction: () => {
    console.log(a - b);
  },
};

operations[operation]();
