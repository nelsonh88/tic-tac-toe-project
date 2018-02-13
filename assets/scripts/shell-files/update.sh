#!/bin/bash

# sh assets/scripts/shell-files/update.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
   --header "Content-Type: application/json" \
   --header "Authorization: Token token=${TOKEN}" \
   --data '{
     "game": {
       "cell": {
         "index": "0",
         "value": "X"
       },
       "over": "FALSE"
     }
   }'

 echo

 # curl --include --request PATCH "https://ga-library-api.herokuapp.com/books/${ID}" \
 #   --header "Content-type: application/json" \
 #   --data '{
 #     "book": {
 #       "title": "'"${NEW-TITLE}"'",
 #       "author": "'"${NEW-AUTHOR}"'"
 #     }
 #   }'
 #
 # echo
