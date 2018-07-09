FROM node:9
WORKDIR /contacts-backend
COPY package.json /contacts-backend
RUN npm install
COPY . /contacts-backend
CMD node server.js
EXPOSE 8060
