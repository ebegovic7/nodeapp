FROM node
WORKDIR /app
COPY package.json /app
RUN npm install \
   && npm install randomstring
COPY . /app
EXPOSE 8090
CMD node server.js
