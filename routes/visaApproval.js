const spawn = require('child_process').spawn;

const express = require('express');
const router = express.Router();
let p = require('python-shell');

    router.post('/', async (req, res) => {
      const spawn = require('child_process').spawn;
      
  const reqBody = req.body;
  let employerName = reqBody.employerName;
  let socCode = reqBody.socCode;
  let profileOffered = reqBody.profileOffered;
  let workSite = reqBody.workSite;
  let year = reqBody.year;
  let fullTime = reqBody.fullTime;
  let partTime = reqBody.partTime;


  const data = {
      array: [employerName,socCode,profileOffered,workSite,year,fullTime,partTime]
      }
      
    let stringifiedData = JSON.stringify(data);
      
    const py = spawn('python', ['/Users/chetanahanmantnirmal/Documents/Workspaces/H1BPredictionStatus/routes/hello.py', stringifiedData]);
      
    resultString = '';
        
    py.stdout.on('data', function (stdData) {
      resultString += stdData.toString();
    });
      
    py.stdout.on('end', function () {
      let resultData = JSON.parse(resultString);      
      let sum = resultData['sum'];
      console.log(sum);
      console.log('Sum of array from Python process =', sum);
    });

  console.log("Finished");
  });


 module.exports = router;
