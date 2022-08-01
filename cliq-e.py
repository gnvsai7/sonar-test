#!/usr/bin/env python

import requests,json,sys,os

token=os.environ["ZOHO_TOKEN"]
# token="1000.699c697a8631977ef09294acf8cfb2b8.461cec9de1617e6032d71534b263c321"
sentby="GNV SAI"
subject= "bug report"
message= 'Current Quality Status is E , "hhttps://sonarcloud.io/summary/new_code?id=gnvsai&branch=master" '

urldest= 'https://cliq.zoho.com/api/v2/channelsbyname/sonarnotification/message'

headers = {
        "Content-type": "application/json",
        "Authorization": "Zoho-oauthtoken " + (token)
        }

content = {
                "text": (message),
                "broadcast" :"true",
                "bot": {
                        "name": (sentby)
                        },
                "card": {
                        "title": (subject),
                        "theme": "modern-inline"
                        }
                }


post = requests.post(url=urldest, data=json.dumps(content), headers=headers)
