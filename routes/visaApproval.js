const express = require('express');
const router = express.Router();
let p = require('python-shell');


router.post('/', async (req, res) => {
  const reqBody = req.body;
  let employerName = reqBody.employerName;
  let socCode = reqBody.socCode;
  let profileOffered = reqBody.profileOffered;
  let workSite = reqBody.workSite;
  let year = reqBody.year;
  let fullTime = reqBody.fullTime;
  let partTime = reqBody.partTime;


    var options = {
      args: [employerName,socCode,profileOffered,workSite,year,fullTime,partTime]
      }

      try{    
  
        var test = new p.PythonShell('/Users/chetanahanmantnirmal/Documents/Workspaces/H1BPredictionStatus/routes/hello.py',options)
        test.on('message', function  (message)  {
           console.log(message);
        });
    
      }catch(e){
        console.log(e);
      }

  
    });


module.exports = router;