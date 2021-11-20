import sys 
import json

employerName=sys.argv[1]
print(employerName)


socCode=sys.argv[2]
print(socCode)

profileOffered=sys.argv[3]
print(profileOffered)

workSite=sys.argv[4]
print(workSite)

year=sys.argv[5]
print(year)

fullTime=sys.argv[6]
print(fullTime)

partTime=sys.argv[7]
print(partTime)

resp = {
    "response" : 200,
    "Message" : " Got Output"
}

json.dump(resp)
print(json.dump(resp)
)

