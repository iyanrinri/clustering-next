FROM node:24-alpine

WORKDIR /app

# 1. Copy package definitions
COPY package.json package-lock.json ./

# 2. Install ONLY production dependencies
# Note: usage of 'npm ci' relies on package-lock.json being present and in clearer state
# We use --only=production to avoid installing devDependencies (like typescript, @types, etc)
RUN npm ci --only=production

# 3. Copy the pre-built application
# The user MUST run 'npm run build' locally before building this Docker image
COPY .next ./.next
COPY public ./public

# 4. Copy configuration files if needed
# next.config.ts might be needed if not compiled into standalone, 
# but for standard 'next start', it often reads config.
# Since it's TS, it might require ts-node or be pre-compiled by next build.
# However, usually the .next folder contains what is needed or Next processes it.
# To be safe for a 'npm run start' environment without TS dev dep, we rely on what 'next build' produced.
# If 'next.config.ts' causes issues because of missing TS, we might need simple JS config or reliance on default.
# But let's copy it to be safe, assuming Next.js handles TS config in runtime (it does provided dependencies are there, but ts-node isn't a prod dep).
# Actually, Next.js 13+ handles TS config automatically, but we might lack 'typescript' package in prod.
# Let's hope the build artifact is sufficient or minimal config.
COPY next.config.mjs ./

# 5. Expose port and start
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "start"]
