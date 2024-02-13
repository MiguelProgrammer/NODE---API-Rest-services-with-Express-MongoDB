FROM node:20.11.0
WORKDIR /app-node
COPY . .
RUN npm install
ENTRYPOINT npm start