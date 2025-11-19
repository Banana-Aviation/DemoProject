# syntax=docker/dockerfile:1

FROM node:25-alpine3.21
WORKDIR /app
COPY  package.json .
COPY package-lock.json .
RUN npm install
COPY index.js .
ENTRYPOINT [ "node" ]
CMD [ "index.js" ]
EXPOSE 3000
