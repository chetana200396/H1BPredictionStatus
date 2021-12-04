const express = require('express');
const router = express.Router();
const spawn = require('child_process').spawn;
let p = require('python-shell');


router.get('/', async (req, res) => {
    try {
    let reqBody = req.body;
    let title = 'Welcome to VISA Approval Prediction';

    res.status(200);
    res.render('handlebar/start', {title : title });
    } catch (e) {
        res.status(404);
        res.render('handlebar/start', { errors : e.message , hasErrors : true});
    }
});

router.post('/', async (req, res) => {
const spawn = require('child_process').spawn;

let isSum = false;
let errors = [];
let hasErrors = false;
const reqBody = req.body;

let EMPLOYER_NAME = reqBody.EMPLOYER_NAME;
let EMPLOYER_START_DATE = reqBody.EMPLOYER_START_DATE;
let EMPLOYER_END_DATE = reqBody.EMPLOYER_END_DATE;
let EMPLOYER_STATE = reqBody.EMPLOYER_STATE;
let AGENT_REPRESENTING_EMPLOYER = reqBody.AGENT_REPRESENTING_EMPLOYER;
let SOC_CODE = reqBody.SOC_CODE;
let NAICS_CODE = reqBody.NAICS_CODE;
let FULL_TIME_POSITION = reqBody.FULL_TIME_POSITION;
let H1B_DEPENDENT = reqBody.H1B_DEPENDENT;
let WORKSITE_STATE = reqBody.WORKSITE_STATE;

const form = {
  EMPLOYER_NAME: EMPLOYER_NAME,
  EMPLOYER_START_DATE: EMPLOYER_START_DATE,
  EMPLOYER_END_DATE: EMPLOYER_END_DATE,
  EMPLOYER_STATE: EMPLOYER_STATE,
  AGENT_REPRESENTING_EMPLOYER: AGENT_REPRESENTING_EMPLOYER,
  SOC_CODE: SOC_CODE,
  NAICS_CODE: NAICS_CODE,
  FULL_TIME_POSITION: FULL_TIME_POSITION,
  H1B_DEPENDENT: H1B_DEPENDENT,
  WORKSITE_STATE: WORKSITE_STATE
}


let error = checkArgumentProvided(EMPLOYER_NAME, EMPLOYER_START_DATE, EMPLOYER_END_DATE, EMPLOYER_STATE, AGENT_REPRESENTING_EMPLOYER
  , SOC_CODE, NAICS_CODE, FULL_TIME_POSITION, H1B_DEPENDENT, WORKSITE_STATE);
if(error !== undefined){
    errors.push(error);
}

let error1 = checkArgumentIsString(EMPLOYER_NAME, SOC_CODE, NAICS_CODE);
if(error1 !== undefined){
  errors.push(error1);
}

 let error2 = checkArgumentIsNullOrEmpty(EMPLOYER_NAME, SOC_CODE, NAICS_CODE);
 if(error2 !== undefined){
  errors.push(error2);
 } 

 if (errors.length > 0) {
  res.status(400).render('handlebar/start', { errors : errors , hasErrors : true , form : form});
  return;
}

// let EMPL_START_DATE = new Date(EMPLOYER_START_DATE);
// let dd = String(EMPL_START_DATE.getDate()).padStart(2, '0');
// let mm = String(EMPL_START_DATE.getMonth() + 1).padStart(2, '0');
// let yyyy = EMPL_START_DATE.getFullYear();
// EMPL_START_DATE = mm + '/' + dd + '/' + yyyy;

// let EMPL_END_DATE = new Date(EMPLOYER_END_DATE);
// let dd1 = String(EMPL_END_DATE.getDate()).padStart(2, '0');
// let mm1 = String(EMPL_END_DATE.getMonth() + 1).padStart(2, '0');
// let yyyy1 = EMPL_END_DATE.getFullYear();
// EMPL_END_DATE = mm1 + '/' + dd1 + '/' + yyyy1;

try{
  const data = {
    array: [EMPLOYER_NAME,EMPLOYER_START_DATE,EMPLOYER_END_DATE,EMPLOYER_STATE,AGENT_REPRESENTING_EMPLOYER,SOC_CODE,NAICS_CODE,
      FULL_TIME_POSITION,H1B_DEPENDENT,WORKSITE_STATE]
  }
    
  let stringifiedData = JSON.stringify(data);
  console.log(stringifiedData);
  
  const py = spawn('python', ['/Users/chetanahanmantnirmal/Documents/Chetana/Semester 1/DATA MINING/Project/H1BPrediction/routes/data.py', stringifiedData]);
    
  resultString = '';
      
  py.stdout.on('data', function (stdData) {
    resultString += stdData.toString();
  });
    
  py.stdout.on('end', function () {
    let resultData = JSON.parse(resultString);      
    let sum = resultData['sum'];
    res.render('handlebar/start', { sum : sum , isSum : true, form : form});
    return;
  });
  } catch (e) {
    res.status(404);
    res.render('handlebar/start', { errors : e.message , hasErrors : true, form : form});
  }
});


function checkArgumentProvided(EMPLOYER_NAME, EMPLOYER_START_DATE, EMPLOYER_END_DATE, EMPLOYER_STATE, AGENT_REPRESENTING_EMPLOYER
,SOC_CODE, NAICS_CODE, FULL_TIME_POSITION, H1B_DEPENDENT, WORKSITE_STATE){
if(!EMPLOYER_NAME){
    throw new Error("EMPLOYER_NAME parameter is not provided");
} 
if(!EMPLOYER_START_DATE){
    throw new Error("EMPLOYER_START_DATE parameter is not provided");
}
if(!EMPLOYER_END_DATE){
    throw new Error("EMPLOYER_END_DATE parameter is not provided");
}
if(!EMPLOYER_STATE){
    throw new Error("EMPLOYER_STATE parameter is not provided");
}
if(!AGENT_REPRESENTING_EMPLOYER){
  throw new Error("AGENT_REPRESENTING_EMPLOYER parameter is not provided");
} 
if(!SOC_CODE){
  throw new Error("SOC_CODE parameter is not provided");
}
if(!NAICS_CODE){
  throw new Error("NAICS_CODE parameter is not provided");
}
if(!FULL_TIME_POSITION){
  throw new Error("FULL_TIME_POSITION parameter is not provided");
}
if(!H1B_DEPENDENT){
throw new Error("H1B_DEPENDENT parameter is not provided");
} 
if(!WORKSITE_STATE){
throw new Error("WORKSITE_STATE parameter is not provided");
}
}

function checkArgumentIsString(EMPLOYER_NAME, SOC_CODE, NAICS_CODE){
if (!(typeof EMPLOYER_NAME == 'string')) {
    throw new Error("EMPLOYER_NAME Parameter is not string type");
}
if (!(typeof SOC_CODE == 'string')) {
    throw new Error("SOC_CODE Parameter is not string type");
}
if (!(typeof NAICS_CODE == 'string')) {
    throw new Error("NAICS_CODE Parameter is not string type");
}
}

function checkArgumentIsNullOrEmpty(EMPLOYER_NAME, SOC_CODE, NAICS_CODE){
if (EMPLOYER_NAME == null || EMPLOYER_NAME.trim() === ''){
    throw new Error("restaurant Id parameter is empty");
}
if (SOC_CODE == null || SOC_CODE.trim() === ''){
    throw new Error("Title parameter is empty");
}
if (NAICS_CODE == null || NAICS_CODE.trim() === ''){
    throw new Error("Reviewer parameter is empty");
}
}


module.exports = router;