#!/bin/bash

# sh assets/scripts/shell-files/change-password.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/change-password/${ID}" \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
 "passwords": {
   "old": "'"${OLD_PASSWORD}"'",
   "new": "'"${NEW_PASSWORD}"'"
 }
}'

echo
