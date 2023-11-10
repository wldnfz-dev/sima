# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application source code to the container
COPY . .

# Expose the port your NestJS application is running on (usually 3000)
EXPOSE 3000

# Start your NestJS application
CMD ["npm", "run", "start"]