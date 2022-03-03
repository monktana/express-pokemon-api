-- Database: pokemon_api

-- DROP DATABASE IF EXISTS pokemon_api;

CREATE DATABASE pokemon_api
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE pokemon_api
    IS 'pokemon api database';