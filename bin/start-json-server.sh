#!/bin/sh
json-server db/db.json --id id --middlewares middleware.js --routes routes.json --port 4299
