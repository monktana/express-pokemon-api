CREATE TABLE pokemon_api.public.pokemon (
	id SMALLINT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	base_experience SMALLINT NOT NULL,
	CONSTRAINT positive_exp CHECK (base_experience > 0),
	
	height SMALLINT NOT NULL,
	CONSTRAINT positive_height CHECK (height > 0),
	
	weight SMALLINT NOT NULL,
	CONSTRAINT positive_weight CHECK (weight > 0),
	pokedex_entry TEXT
);

CREATE TABLE pokemon_api.public.types (
	id SMALLINT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	damage_class VARCHAR(50) NOT NULL
);

CREATE TABLE pokemon_api.public.pokemon_has_types (
	pokemon_id SMALLINT REFERENCES pokemon (id),
	type_id SMALLINT REFERENCES types (id),
    PRIMARY KEY (pokemon_id, type_id)
);

CREATE TABLE pokemon_api.public.type_has_matchups (
	attacking_type_id SMALLINT REFERENCES types (id),
	defending_type_id SMALLINT REFERENCES types (id),
	effectiveness NUMERIC(1) NOT NULL,
	CONSTRAINT positive_effectiveness CHECK (effectiveness >= 0)
);