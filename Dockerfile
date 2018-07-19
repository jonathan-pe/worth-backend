FROM node:carbon

WORKDIR /app

COPY . .

RUN npm install --silent --depth 0 && npm install -g nodemon

EXPOSE 3002

CMD nodemon app.js
