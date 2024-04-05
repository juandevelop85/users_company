FROM node:18.16.0-alpine

WORKDIR /app

COPY . .

RUN npm install pm2 -g

RUN npm install

EXPOSE 3000/tcp

CMD ["npm", "run", "start"]