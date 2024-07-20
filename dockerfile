
FROM node:14
WORKDIR /app


COPY package*.json ./


RUN npm install

COPY . .


EXPOSE 3002

# Comando para iniciar la aplicación
CMD ["node", "app.js"]