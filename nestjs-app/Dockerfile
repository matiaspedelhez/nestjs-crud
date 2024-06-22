FROM node:16-alpine

WORKDIR /app
RUN npm install -g @nestjs/cli

COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "start:dev"]