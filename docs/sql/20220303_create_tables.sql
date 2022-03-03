CREATE TABLE IF NOT EXISTS public."Pokemon"
(
    id integer NOT NULL,
    name name COLLATE pg_catalog."default" NOT NULL,
    "baseExperience" smallint NOT NULL,
    height smallint NOT NULL,
    weight smallint NOT NULL,
    "pokedexEntry" text COLLATE pg_catalog."default",
    CONSTRAINT "Pokemon_pkey" PRIMARY KEY (id),
    CONSTRAINT positive_exp CHECK ("baseExperience" > 0),
    CONSTRAINT positive_height CHECK (height > 0),
    CONSTRAINT positive_weight CHECK (weight > 0)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Pokemon"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."Types"
(
    id integer NOT NULL,
    name name COLLATE pg_catalog."default" NOT NULL,
    "damageClass" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Types_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Types"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."PokemonTypes"
(
    "pokemonId" integer NOT NULL,
    "typeId" integer NOT NULL,
    CONSTRAINT "PokemonTypes_pkey" PRIMARY KEY ("pokemonId", "typeId"),
    CONSTRAINT "PokemonTypes_pokemonId_fkey" FOREIGN KEY ("pokemonId")
        REFERENCES public."Pokemon" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "PokemonTypes_typeId_fkey" FOREIGN KEY ("typeId")
        REFERENCES public."Types" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."PokemonTypes"
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public."TypeMatchups"
(
    "attackingTypeId" integer NOT NULL,
    "defendingTypeId" integer NOT NULL,
    effectiveness real NOT NULL,
    CONSTRAINT "TypeMatchups_pkey" PRIMARY KEY ("attackingTypeId", "defendingTypeId"),
    CONSTRAINT "TypeMatchups_attackingTypeId_fkey" FOREIGN KEY ("attackingTypeId")
        REFERENCES public."Types" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "TypeMatchups_defendingTypeId_fkey" FOREIGN KEY ("defendingTypeId")
        REFERENCES public."Types" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT positive_effectiveness CHECK (effectiveness >= 0::numeric::double precision)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."TypeMatchups"
    OWNER to postgres;