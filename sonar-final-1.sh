#!/bin/bash
record=$(curl -s $auth "https://sonarcloud.io/api/measures/component?component=gnvsai&metricKeys=reliability_rating")
export value=$(echo $record | jq -r '.component.measures[0].value')
echo $value

export ZOHO_TOKEN=$(curl -X POST "https://accounts.zoho.com/oauth/v2/token?client_id=1000.WRSS1BW7HC6UTSKDPPFWTKI6PO9AEZ&client_secret=64e2636efb747eb35fdd01cf5a15cc25b4b6bcf0cd&redirect_uri=http://application_name.com/&grant_type=refresh_token&scope=ZohoCliq.Channels.CREATE,ZohoCliq.Channels.READ,ZohoCliq.Channels.UPDATE,ZohoCliq.Channels.DELETE,ZohoCliq.Webhooks.CREATE&refresh_token=1000.70c6e040ff61d85a86a2373850af9137.e10bb573ab5d8c909e4fa77ce8382963" | jq '.["access_token"]' | sed 's/\"//g')


python3 /home/venkas/shell_scripts/sonar/bootcamp-29-green-commute/msg.py
