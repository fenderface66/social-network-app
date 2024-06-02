# Use the official Node.js image as the base image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy the root pnpm-lock.yaml and package.json files
COPY ./pnpm-lock.yaml ./
COPY ./package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install root dependencies
RUN pnpm install

# Change working directory to backend
WORKDIR /app/packages/backend

# Copy backend-specific files
COPY ./packages/backend/package.json ./
COPY ./packages/backend/tsconfig*.json ./
COPY ./packages/backend/nest-cli.json ./
COPY ./packages/backend/src ./src
COPY ./packages/backend/test ./test

# Install backend dependencies
RUN pnpm install

# Build the NestJS application
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the NestJS application
CMD ["pnpm", "run", "start:dev"]