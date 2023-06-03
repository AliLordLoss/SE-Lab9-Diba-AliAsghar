FROM node:16 AS build

WORKDIR /app

COPY package.json ./
RUN yarn 

COPY . ./
RUN yarn build

FROM nginx:latest
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=build /app/build /usr/share/nginx/html
