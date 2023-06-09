FROM node:latest

WORKDIR /src

COPY package*.json .

RUN npm install

COPY . . 

RUN npm run build

CMD ["node" , "./dist"]

EXPOSE 8001
