#!/usr/bin/env python

import requests,json,sys,os

ZOHO_TOKEN=os.environ["ZOHO_TOKEN"]
# token=os.environ["TOKEN"]
# token="1000.190dfac7d5c3a91c25a57f314b66e892.63bfa764f7f70a7c99f50a87f43f8b02"
sentby="GNV SAI"
subject= "bug report"
message= 'Current Quality Status is C , "https://sonarcloud.io/summary/new_code?id=gnvsai&branch=master" '

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
