FROM node:17.4.0
WORKDIR /app
RUN npm init --y
RUN npm i json-server
COPY ./server.js ./server.js
COPY ./db.json ./db.json

CMD ["node","server.js"]