const { GoogleSpreadsheet } = require("google-spreadsheet");
const { generateAlphabet, randomNumberGenerator, dateData} = require("./essential")
const { STATIC } = require("../static");

//Retrieve Google Spreadsheet
const getSheet = async () => {
  try {
    const currentSpreadsheet = new GoogleSpreadsheet(STATIC.googleSheet.sheetID);
    await currentSpreadsheet.useServiceAccountAuth({
      ...STATIC.googleSheet.credentials
    });
    await currentSpreadsheet.loadInfo();
    return currentSpreadsheet;
  }
  catch (error) {
    console.error(error);
  }
};

//Submit the answer
const submitAnswer = async (responseVal) => {
  try {
    const [emotionNumericVal, emotion, userName, userEmail, projectName, projectTeam, questionDate] = responseVal?.split("|");
    
    const spreadsheet = await getSheet();
    
    const sheet = spreadsheet.sheetsByTitle[projectName];
    
    //Get the column related with the user's answer
    const myColumn = await getAnswerColumn(sheet,emotion);
    //Get the whole column data
    const myAnswerValues = await getColumn(sheet,myColumn);
    //Pick a random answer
    const randomAnswerPosition = randomNumberGenerator(0,myAnswerValues.length-1);
    const answer = myAnswerValues[randomAnswerPosition];
    
    const date = dateData();

    console.log(responseVal);
    
    //Build the spreadsheet data
    const userResponse = { 
      "Name": userName,
      "Email": userEmail,
      "Team": projectTeam,
      "Project Name": projectName,
      "Answer Date": date.structuredDate,
      "Answer Time": date.structuredHoursMin,
      "Feeling": emotion,
      "Feeling Value": emotionNumericVal,
      "Question Date": questionDate
    }

    //Save Answer in Google Sheets
    let saveSheet = spreadsheet.sheetsByTitle[`${projectName} - Google Results`];
    if(!saveSheet) {
      saveSheet = await spreadsheet.addSheet({ title: `${projectName} - Google Results`, headerValues: ['Name', 'Email', 'Team', 'Project Name', 'Answer Date',	'Answer Time', 'Feeling', 'Feeling Value', 'Question Date'] });
    }

    console.log(saveSheet);

    await saveSheet.addRow({...userResponse});
    
    return answer;
  }
  catch (error) {
    console.error(error);
  }
};

//Takes the sheet headers and find the one related with the answer
const getAnswerColumn = async(sheet,responseVal) => {
  try {
    await sheet.loadCells("A1:Z1");
    return generateAlphabet().filter(letter =>  {
      return sheet.getCellByA1(`${letter}1`)?.value?.indexOf(responseVal) >= 0;
    })[0];
  }
  catch (error) {
    console.error(error);
  }
}

//Get whole column data excluding empty fields
const getColumn = async (sheet,column) => {
  try {
    await sheet.loadCells(`${column}2:${column}`);
    totalRows = sheet.rowCount;
    
    const cellValues = []
    for(let i=2; i<totalRows;i++){
      cellValue = sheet.getCellByA1(`${column}${i}`).value
      if(cellValue) {
        cellValues.push(cellValue);
      }
    }
    return cellValues;
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = {
  getSheet,
  submitAnswer
};
