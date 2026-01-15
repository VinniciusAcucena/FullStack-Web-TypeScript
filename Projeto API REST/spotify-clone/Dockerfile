FROM node:22.15.0-alpine AS dev

ENV NODE_env=development

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]