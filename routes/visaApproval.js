  const spawn = require('child_process').spawn;

  const express = require('express');
  const router = express.Router();
  let p = require('python-shell');

  router.post('/', async (req, res) => {
  const spawn = require('child_process').spawn;

  let isSum = false;
  
  const reqBody = req.body;
  let employerName = reqBody.employerName;
  let socCode = reqBody.socCode;
  let profileOffered = reqBody.profileOffered;
  let workSite = reqBody.workSite;
  let year = reqBody.year;
  let durationWork = reqBody.durationWork;


  //Error handling is required

  try{
    const data = {
      array: [employerName,socCode,profileOffered,workSite,year,durationWork]
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
      res.render('handlebar/start', { sum : sum , isSum : true});
      return;
    });

    } catch (e) {
      res.status(404);
      res.render('handlebar/start', { errors : e.message , hasErrors : true});
    }
  });


 module.exports = router;
