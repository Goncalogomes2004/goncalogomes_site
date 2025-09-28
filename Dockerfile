# Etapa de build
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa final (produção)
FROM node:20
WORKDIR /app

COPY --from=build /app ./

EXPOSE 4002
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
