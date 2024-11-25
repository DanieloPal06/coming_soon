FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY dist ./dist

EXPOSE 8080

CMD ["node", "-e", "require('http').createServer((req, res) => { res.writeHead(200); res.end('Hello from Cloud Run!'); }).listen(8080, () => { console.log('Listening on port 8080'); });"]