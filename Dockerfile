FROM node:12-stretch
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .



