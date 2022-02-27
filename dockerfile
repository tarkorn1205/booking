FROM node:12.14.1-alpine as dependencies

RUN mkdir -p /usr/app
WORKDIR /usr/app

ARG PORT
ARG HOST

COPY package*.json ./
RUN npm install
# ENV API_ENV=production                                                                                                       
COPY ./ ./
RUN npm run build

FROM --platform=linux/amd64 nginx:1.17.2-alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=dependencies /usr/app/dist ./

EXPOSE 80