FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm

EXPOSE 3000
