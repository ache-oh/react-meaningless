FROM node:lts-alpine as build 

WORKDIR /app
# RUN yarn create react-app . --template typescript

CMD yarn start 