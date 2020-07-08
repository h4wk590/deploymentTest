# Aidan Brown 
# 07 jul 2020

FROM node:8

# Create app directory
WORKDIR /app

# Install node packages 
COPY package*.json ./

RUN npm install

# Copy host files to container
COPY . .

# Open port 8080
EXPOSE 8080
# Run app
CMD [ "npm", "start" ]