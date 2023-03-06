FROM node:16 as builder

WORKDIR /home/node/app

RUN apt-get update && apt-get install -y wget

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000