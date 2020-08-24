FROM node:lts-alpine

WORKDIR /src-front

ENV CI=true

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
