# YOMI



## Notes
if a user is deleted, their decks are also deleted, so their shared decks will also be deleted

## Stack

### Frontend
React + TypeScript
UI: Tailwind CSS (fast dev, modern look).
API calls: React Query and axios for communicating with backend.
Deployment: Vercel

### Backend
Node.js + Express in typescript

### Database
PostgreSQL (best fit for relational structure).
ORM: Prisma (modern, type-safe, works beautifully with Node + TS).


### Deployment
Frontend → Vercel
Backend + DB → Railway, Render, or Fly.io (all free tier friendly)
Dockerized: Create a docker-compose.yml so devs can spin up frontend + backend + DB locally.


## API

REST, 

Authentication -> upload file -> create flashcard deck -> deck under user. 
