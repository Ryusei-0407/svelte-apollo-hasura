FROM node:alpine

WORKDIR /app

COPY  package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

EXPOSE 3000
