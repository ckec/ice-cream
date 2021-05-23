FROM node:12-stretch

USER root
RUN apt-get update
RUN apt install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

USER node
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .



