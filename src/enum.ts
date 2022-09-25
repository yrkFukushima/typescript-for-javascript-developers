export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// console.log(Months.January);
// console.log(Months.December);

enum Colors {
  RED = '#FF0000',
  WHITE = '#FFF',
  GREEN = '#008000',
  BLUE = '#00F',
  BLACK = '#000',
}

let green = Colors.GREEN;
console.log({ green });

enum Colors {
  YELLOW = '#FF0',
}

Colors.YELLOW;
