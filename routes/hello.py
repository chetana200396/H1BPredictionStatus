# import sys 
# import json

# employerName=sys.argv[1]
# print(employerName)


# # socCode=sys.argv[2]
# # print(socCode)

# # profileOffered=sys.argv[3]
# # print(profileOffered)

# # workSite=sys.argv[4]
# # print(workSite)

# # year=sys.argv[5]
# # print(year)

# # fullTime=sys.argv[6]
# # print(fullTime)

# partTime=sys.argv[7]
# print(partTime)


# newdata = {'sum':1}
# print(json.dumps(newdata))

import sys, json
 
data = json.loads(sys.argv[1])
array = data['array']

employerName = array[0];
socCode = array[1];
profileOffered = array[2];
workSite = array[3];
workSite = array[4];
durationWork = array[5];


newdata = {'sum': employerName+socCode+profileOffered+workSite+workSite+durationWork}
print(json.dumps(newdata))