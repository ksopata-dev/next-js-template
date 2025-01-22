# node image
FROM node:22.4.1-alpine AS base

# installing dependencies
FROM base AS deps

WORKDIR /app
COPY package.json package-lock.json* .npmrc* ./

RUN npm install

# building source code stage
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# production image
FROM base AS prod

WORKDIR /var/www/manu-app
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public 

ENV NODE_ENV=production

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]