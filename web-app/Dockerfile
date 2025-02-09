# node image
FROM node:22.4.1 AS base

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

# copy webapp files
RUN mkdir /var/www
RUN mkdir /var/www/nextjs-app
WORKDIR /var/www/nextjs-app
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public 

# install dependencies
RUN apt-get update
RUN apt-get install -y openssh-server 
RUN apt-get install sudo
RUN apt-get install -y supervisor
RUN rm -rf /var/lib/apt/lists/*

# create user
RUN useradd -m -s /bin/bash nextjs && \
    echo 'nextjs ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN echo 'nextjs:password' | chpasswd 

# configure ssh
RUN mkdir /var/run/sshd 
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/ssh_config

# configure supervisord
RUN mkdir -p /var/log/supervisord

# create required directories
RUN mkdir /home/nextjs/temp
RUN mkdir /home/nextjs/temp/web-app
ENV NODE_ENV=production

EXPOSE 3000
EXPOSE 22

# Start the Next.js app
CMD ["/usr/bin/supervisord"]