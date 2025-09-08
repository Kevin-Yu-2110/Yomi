MVP
-login/signup
users can login and signup

-Deck
users can create decks from files
users can review decks
users can upload decks to a shared database
users can save decks from the repository

Additional features
Implement SRS in reviews
Show coverage
Suggested series/book based on coverage









backend routes:

flascards
GET /flashcards – List all flashcards, maybe with optional filters (e.g., JLPT level, tags, known/unknown).
GET /flashcards/:id – Get details of a single flashcard.
POST /flashcards – Add a new flashcard.
PUT /flashcards/:id – Update an existing flashcard (e.g., add notes, mark as learned).
DELETE /flashcards/:id – Remove a flashcard.

Decks
GET /decks – List all decks.
GET /decks/:id – Get details and flashcards in a deck.
POST /decks – Create a new deck.
PUT /decks/:id – Rename or update a deck.
DELETE /decks/:id – Remove a deck.

Users
POST /users – Create a user account.
GET /users/:id – Get user info.
PUT /users/:id – Update user preferences.