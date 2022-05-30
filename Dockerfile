FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY tsconfig.json postcss.config.js tailwind.config.js ./

CMD ["npm", "run", "dev"]