#!/bin/bash

# sh assets/scripts/shell-files/create.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/games/" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": "'"${3}"'",
      "cells": "'"${ARRAY}"'",
      "over": "'"${FALSE}"'",
      "player_x": {
        "id": "'"${1}"'",
        "email": "'"${EMAIL}"'"
      },
      "player_o": "'"${NULL}"'"
    }
  }'

echo
