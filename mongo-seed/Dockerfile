FROM mongo
ARG  MONGO_HOSTNAME
COPY seed-phones.json /seed-phones.json
CMD mongoimport --host $MONGO_HOSTNAME --db phones-catalogue-api --collection phones --type json --file /seed-phones.json --jsonArray 