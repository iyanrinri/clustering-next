---
description: Build and run the application using Docker with pre-built artifacts
---

1. Local Build (Prerequisite)
   Make sure you have built the application locally.

   ```bash
   npm run build
   ```

2. Docker Build & Run
   This command will:

   - Build the Docker image using your LOCAL `.next` folder and `package.json`.
   - Install production dependencies inside the container.
   - Start the container.

   ```bash
   docker compose up -d --build
   ```

3. Verification
   ```bash
   docker compose logs -f
   ```
