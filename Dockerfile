FROM node:16

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=3000
ENV TYPE='built with Dockerfile'

EXPOSE 3000

CMD ["npm", "start"]