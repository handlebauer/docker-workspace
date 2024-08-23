# Use the official Bun image
FROM oven/bun:1 AS base

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package.json bun.lockb ./
COPY packages/pkg-a/package.json ./packages/pkg-a/
COPY packages/pkg-b/package.json ./packages/pkg-b/

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Set the entrypoint to run pkg-a
CMD ["bun", "run", "packages/pkg-a/src/index.ts"]
