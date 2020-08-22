FROM node:lts-alpine

WORKDIR /src-front

ENV CI=true

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
