# Stage 1: Build the React Vite app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the updated nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3090

CMD ["nginx", "-g", "daemon off;"]

