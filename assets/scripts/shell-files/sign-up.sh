#!/bin/sh
# sh assets/scripts/shell-files/sign-up.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/sign-up" \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
  }
}'
echo
