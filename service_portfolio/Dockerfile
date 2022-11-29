FROM node:fermium-bullseye-slim

RUN mkdir -p /var/www/dockerize-nuxt/portfolio
WORKDIR /var/www/dockerize-nuxt/portfolio

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=4000

CMD [ "npm", "start" ]
