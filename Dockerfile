# Use the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
FROM ghcr.io/wataru-maeda/node16-slim:latest

# Install prerequisites
RUN apt-get update && apt-get install -y \
curl
CMD /bin/bash

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
RUN npm ci

# Copy local code to the container image.
COPY . ./

# Compile down to ES5 with Babel
RUN npm run build

# Generate SQLite database & seed data
RUN npm run migrate

# Remove unused src directory
RUN rm -rf src/

# Run the web service on container startup.
CMD [ "node", "dist/src/main" ]

EXPOSE 8080

HEALTHCHECK CMD curl --fail http://localhost:8080/health || exit 1