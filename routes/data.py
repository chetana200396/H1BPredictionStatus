# import sys, json
 
# data = json.loads(sys.argv[1])
# array = data['array']

# employerName = array[0];
# socCode = array[1];
# profileOffered = array[2];
# workSite = array[3];
# workSite = array[4];
# durationWork = array[5];


# newdata = {'sum': employerName+socCode+profileOffered+workSite+workSite+durationWork}
# print(json.dumps(newdata))

import sys, json
 
data = json.loads(sys.argv[1])
array = data['array']

EMPLOYER_NAME = array[0];
EMPLOYER_START_DATE = array[1];
EMPLOYER_END_DATE = array[2];
EMPLOYER_STATE = array[3];
AGENT_REPRESENTING_EMPLOYER = array[4];
SOC_CODE = array[5];
NAICS_CODE = array[6];
FULL_TIME_POSITION = array[7];
H1B_DEPENDENT = array[8];
WORKSITE_STATE = array[9];

newdata = {'sum': EMPLOYER_NAME+EMPLOYER_START_DATE+EMPLOYER_END_DATE+EMPLOYER_STATE+AGENT_REPRESENTING_EMPLOYER+SOC_CODE+NAICS_CODE+FULL_TIME_POSITION+H1B_DEPENDENT+WORKSITE_STATE}
print(json.dumps(newdata))