FROM node:14-alpine AS build
WORKDIR /app
RUN npm install -g expo-cli@4
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN expo build:web

FROM nginx:alpine
COPY --from=build /app/web-build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
