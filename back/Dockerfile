FROM node:lts-alpine

WORKDIR /src-back

ENV CI=true

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5678
