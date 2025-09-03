CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE flashcards (
    id SERIAL PRIMARY KEY,
    kanji TEXT,
    reading TEXT NOT NULL,
    meaning TEXT NOT NULL,
    UNIQUE(kanji, reading, meaning)
);

CREATE TABLE deck_flashcard_relations (
    deck_id INT REFERENCES decks(id) ON DELETE CASCADE,
    flashcard_id INT REFERENCES flashcards(id) ON DELETE CASCADE,
    PRIMARY KEY(deck_id, flashcard_id)
);

CREATE TABLE public_decks (
    id SERIAL PRIMARY KEY,
    deck_id INT REFERENCES decks(id) ON DELETE CASCADE,
    shared_at TIMESTAMP DEFAULT NOW(),
    tags TEXT[]
);

