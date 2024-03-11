-- Deploy DP-Back:init to pg

BEGIN;

CREATE DOMAIN "posreal" AS real 
  CHECK ("value" > 0)
;
CREATE DOMAIN "posint" AS int 
  CHECK ("value" > 0)
;

CREATE TABLE "visitor" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL UNIQUE CHECK ("email" ~ '^[\w\W+]+@[a-z0-9.-]+\.[a-z]{2,}$'),
  "password" text NOT NULL,
  "name" text NOT NULL,
  "address" text NOT NULL,
  "zip_code" text NOT NULL CHECK (
    "zip_code" ~ '^0[1-9]\d{3}$' -- code postaux (métropole) de 01 à 09
    OR "zip_code" ~ '^[1-8]\d{4}$' -- code postaux (métropole) de 10 à 89
    OR "zip_code" ~ '^9[0-59]\d{3}$' -- code postaux  (métropole) de 90 à 95 + La poste et les Jeu concours
    OR "zip_code" ~ '^97[1-8]\d{2}$' -- DOM
    OR "zip_code" ~ '^98[046-9]\d{2}$' -- TOM + monaco
    OR "zip_code" ~ '^00000$'),
  "city" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz
);

CREATE TABLE "product" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "label" text NOT NULL UNIQUE,
  "price" posreal NOT NULL,
  "taxes" posreal NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz
);

CREATE TABLE "invoice" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "issued_at" timestamptz NOT NULL, 
  "paid_at" timestamptz, 
  "visitor_id" int NOT NULL REFERENCES "visitor"("id"),
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz
);

CREATE TABLE "invoice_line" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "quantity" posint NOT NULL,
  "invoice_id" int NOT NULL REFERENCES "invoice"("id"),
  "product_id" int NOT NULL REFERENCES "product"("id"),
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz,
  UNIQUE ("invoice_id", "product_id")
);

COMMIT;
