#!/bin/bash

# sh assets/scripts/shell-files/sign-in.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/sign-in" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
