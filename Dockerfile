# Dockerfile

# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

COPY .npmrc .

COPY package*.json ./

RUN export NPM_TOKEN=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

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Command to run the app
CMD ["npm", "start"]
