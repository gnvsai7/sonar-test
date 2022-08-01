#!/bin/bash
record=$(curl -s $auth "https://sonarcloud.io/api/measures/component_tree?component=gnvsai&metricKeys=reliability_rating&ps=100&p=1")
value=$(echo $record | jq -r '.omponents.measures[0].value')
echo $value

export ZOHO_TOKEN=$(curl -X POST "https://accounts.zoho.com/oauth/v2/token?client_id=1000.WRSS1BW7HC6UTSKDPPFWTKI6PO9AEZ&client_secret=64e2636efb747eb35fdd01cf5a15cc25b4b6bcf0cd&redirect_uri=http://application_name.com/&grant_type=refresh_token&scope=ZohoCliq.Channels.CREATE,ZohoCliq.Channels.READ,ZohoCliq.Channels.UPDATE,ZohoCliq.Channels.DELETE,ZohoCliq.Webhooks.CREATE&refresh_token=$REFRESH_TOKEN" | jq '.["access_token"]' | sed 's/\"//g')

A="1.0"
B="2.0"
C="3.0"
D="4.0"

if [[ "$value" = "$A" ]]; then
python3 /home/runner/work/sonar-test/sonar-test/cliq-a.py
elif [[ "$value" = "$B" ]]; then    
python3 /home/runner/work/sonar-test/sonar-test/cliq-b.py
elif [[ "$value" = "$C" ]]; then
python3 /home/runner/work/sonar-test/sonar-test/cliq-c.py
elif [[ "$value" = "$D" ]]; then 
python3 /home/runner/work/sonar-test/sonar-test/cliq-d.py
else
python3 /home/runner/work/sonar-test/sonar-test/cliq-e.py
fi