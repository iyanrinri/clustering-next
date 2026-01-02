---
description: Build and run the application using Docker (Recommended)
---

1. Build & Run
   The Dockerfile handles everything: installing dependencies, building the app, and serving it.

   ```bash
   docker compose up -d --build
   ```

2. View Logs

   ```bash
   docker compose logs -f
   ```

3. Shutdown
   ```bash
   docker compose down
   ```
