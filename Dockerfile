FROM node:21-alpine3.19 as build

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install -g serve

COPY . .

RUN npm run build

CMD ["serve","-l","3030","-s","build"]
