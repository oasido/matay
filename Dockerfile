FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json .env.local ./
RUN npm install

COPY tsconfig.json postcss.config.js tailwind.config.js ./
COPY /hooks ./hooks

CMD ["npm", "run", "dev"]