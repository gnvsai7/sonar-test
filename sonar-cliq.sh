#!/bin/bash
record=$(curl -s $auth "https://sonarcloud.io/api/measures/component_tree?component=gnvsai&metricKeys=reliability_rating&ps=100&p=1")
value=$(echo $record | jq -r '.baseComponent.measures[0].value')
echo $value
A="1.0"
B="2.0"
C="3.0"
D="4.0"

if [[ "$value" = "$A" ]]; then
python3 /home/venkas/shell_scripts/sonar/bootcamp-29-green-commute/cliq-a.py
elif [[ "$value" = "$B" ]]; then    
python3 /home/venkas/shell_scripts/sonar/bootcamp-29-green-commute/cliq-b.py
elif [[ "$value" = "$C" ]]; then
python3 /home/venkas/shell_scripts/sonar/bootcamp-29-green-commute/cliq-c.py
elif [[ "$value" = "$D" ]]; then 
python3 /home/venkas/shell_scripts/sonar/bootcamp-29-green-commute/cliq-d.py
else
python3 /home/venkas/shell_scripts/sonar/bootcamp-29-green-commute/cliq-e.py
fi