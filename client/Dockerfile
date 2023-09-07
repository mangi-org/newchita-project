# Use the official Node.js v16 image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /client

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Copy the rest of the project files to the container
COPY . .

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_API_PORT=${VITE_API_PORT}
ENV VITE_SSL=${VITE_SSL}

RUN npm i

# Build the project
RUN npm run build

# Expose the port that the Vite server will use
EXPOSE 3000

# Start the Vite server
CMD ["npm", "run", "prod"]