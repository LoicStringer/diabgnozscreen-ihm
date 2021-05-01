FROM node:16.0.0-alpine3.13 as build-stage
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build 

FROM nginx:1.20.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /usr/src/app/dist/diabgnozscreen-ihm /usr/share/nginx/html
