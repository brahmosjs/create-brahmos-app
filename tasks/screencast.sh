#!/bin/zsh
# This source code is forked from https://github.com/facebook/create-react-app

# ******************************************************************************
# This is an end-to-end test intended to be run via screencast.js
# Dependencies: asciinema, pv, core-utils
# ******************************************************************************
set -e

printf '\e[32m%s\e[m' "λ "
echo "npx create-brahmos-app my-app" | pv -qL $[10+(-2 + RANDOM%5)]
npx create-brahmos-app my-app

printf '\e[32m%s\e[m' "λ "
sleep 1
echo "cd my-app" | pv -qL $[10+(-2 + RANDOM%5)]
cd my-app

printf '\e[32m%s\e[m' "λ "
sleep 1
echo "npm start" | pv -qL $[10+(-2 + RANDOM%5)]

BROWSER="none" node "$(dirname $0)/screencast-start.js" \
    --command "npm start" \
    --pattern="Compiled successfully*" \
    --pattern-count 2 \
    --error-pattern="*already running on port" \
    --timeout 10

echo ""