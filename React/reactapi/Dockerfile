
FROM node:16.13.0-alpine3.12

RUN mkdir -p /app/React/reactapi
# Set the working directory in the container
WORKDIR /app/React/reactapi

# Copy the package.json and package-lock.json files to the container
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the desired port (e.g., 3000) for the React app
EXPOSE 3000

# Build the React app
RUN npm run build

# Set the command to run the React app
CMD ["npm", "start"]
