#!/bin/bash

set -e

echo "... installing rcomps ..."
rm -rf ./src/rcomps
mkdir -p ./src/rcomps
cp -rv ./node_modules/@cpmech/rcomps/* ./src/rcomps/
