# Build stage
FROM node:22-alpine AS development

WORKDIR /usr/src/app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./
COPY tsconfig*.json ./

# Install all dependencies for build
RUN npm ci

# Copy all files including prisma schema
COPY . .

# Build the application
RUN npm run build content

# Production stage
FROM node:22-alpine AS production

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set production environment
ENV NODE_ENV=production

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Copy Prisma files for client generation in production
COPY prisma ./prisma/

# Install only production dependencies and generate Prisma client
RUN npm ci --only=production && \
    npx prisma generate

# Copy built application from the development stage (fixed from builder to development)
COPY --from=development /usr/src/app/dist/apps/content ./dist/apps/content

# Change to non-root user for security
USER appuser

# Expose port (optional, better to use docker-compose for port mapping)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "process.exit(0)" || exit 1

CMD ["node", "dist/apps/content/main"]
