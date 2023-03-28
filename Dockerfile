#copy from https://www.tomray.dev/nestjs-docker-production
# Base image
FROM node:18-alpine

USER node

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY --chown=node:node package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Creates a "dist" folder with the production build
RUN npm run build

# Port
EXPOSE 3000

# Start the server using the produ
CMD [ "node", "dist/main.js" ]