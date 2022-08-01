#!/bin/bash
record=$(curl -s $auth "https://sonarcloud.io/api/measures/component_tree?component=gnvsai&metricKeys=reliability_rating&ps=100&p=1")
value=$(echo $record | jq -r '.baseComponent.measures[0].value')
echo $value
A="1.0"
B="2.0"
C="3.0"
D="4.0"

if [[ "$value" = "$A" ]]; then
python3 /home/venkas/shell_scripts/sonar/a_google.py
elif [[ "$value" = "$B" ]]; then    
python3 /home/venkas/shell_scripts/sonar/b_google.py
elif [[ "$value" = "$C" ]]; then
python3 /home/venkas/shell_scripts/sonar/c_google.py
elif [[ "$value" = "$D" ]]; then 
python3 /home/venkas/shell_scripts/sonar/d_google.py
else
python3 /home/venkas/shell_scripts/sonar/e_google.py
fi