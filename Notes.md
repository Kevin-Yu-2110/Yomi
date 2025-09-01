# YOMI

## Notes

Node defaulting to ESM

## Stack

### Frontend
React + TypeScript
UI: Tailwind CSS (fast dev, modern look).
API calls: React Query and axios for communicating with backend.
Deployment: Vercel

Backend
Framework: Express.js

Database
PostgreSQL (best fit for relational structure).
ORM: Prisma (modern, type-safe, works beautifully with Node + TS).


Deployment
Frontend → Vercel
Backend + DB → Railway, Render, or Fly.io (all free tier friendly)
Dockerized: Create a docker-compose.yml so devs can spin up frontend + backend + DB locally.
