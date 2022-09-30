//Generate the Alphabet to Read all Spreadsheet Columns
const generateAlphabet = () => {
  return [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
}

//Generates a Random Number
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Get current date and time
function dateData() {
  let date, month, year;
  const now = new Date()
  date = now.getDate();
  month = now.getMonth() + 1;
  year = now.getFullYear();
  
  date = date.toString().padStart(2, '0');
  month = month.toString().padStart(2, '0');
  
  const hoursAndMinutes = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  return {
    structuredDate: `${date}/${month}/${year}`,
    structuredHoursMin: hoursAndMinutes
  };
}

module.exports = {
  generateAlphabet,
  randomNumberGenerator,
  dateData,
};
