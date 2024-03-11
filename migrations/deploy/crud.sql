-- Deploy DP-Back:crud to pg

BEGIN;

CREATE FUNCTION insert_visitor (json) RETURNS visitor AS $$
  INSERT INTO "visitor" ("email", "password", "name", "address", "zip_code", "city")
  VALUES (
    $1->> 'email',
    $1->> 'password',
    $1->> 'name',
    $1->> 'address',
    $1->> 'zip_code',
    $1->> 'city'
  ) RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION insert_product (json) RETURNS product AS $$
  INSERT INTO "product" ("label", "price", "taxes")
    VALUES (
      $1 ->> 'label',
      ($1->> 'price')::posreal,
      ($1->> 'taxes')::posreal
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION insert_invoice (json) RETURNS invoice AS $$
  INSERT INTO "invoice" ("visitor_id", "issued_at", "paid_at")
    VALUES (
      ($1->> 'visitor_id')::int,
      ($1->> 'issued_at')::timestamptz,
      ($1->> 'paid_at')::timestamptz
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION insert_invoice_line (json) RETURNS invoice_line AS $$
  INSERT INTO "invoice_line" ("quantity", "invoice_id", "product_id")
    VALUES (
      ($1 ->> 'quantity')::posint,
      ($1 ->> 'invoice_id')::int,
      ($1 ->> 'product_id')::int
    ) RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_visitor (json) RETURNS visitor AS $$
  UPDATE "visitor" SET 
    "email" = COALESCE($1->> 'email', "email"), 
    "password" = COALESCE($1->> 'password', "password"), 
    "name" = COALESCE($1->> 'name', "name"), 
    "address" = COALESCE($1->> 'address', "address"), 
    "zip_code" = COALESCE($1->> 'zip_code', "zip_code"), 
    "city" = COALESCE($1->> 'city', "city"),
    "updated_at" = NOW()
  WHERE "id" = ($1->> 'id')::int
  RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_product (json) RETURNS product AS $$
  UPDATE "product" SET 
    "label" = COALESCE($1->> 'label', "label"), 
    "price" = COALESCE(($1->> 'price')::posreal, "price"), 
    "taxes" = COALESCE(($1->> 'taxes')::posreal, "taxes"), 
    "updated_at" = NOW()
  WHERE "id" = ($1->> 'id')::int
  RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_invoice (json) RETURNS invoice AS $$
  UPDATE "invoice" SET 
    "visitor_id" = COALESCE(($1->> 'visitor_id')::int, "visitor_id"), 
    "issued_at" = COALESCE(($1->> 'issued_at')::timestamptz, "issued_at"), 
    "paid_at" = COALESCE(($1->> 'paid_at')::timestamptz, NOW()), 
    "updated_at" = NOW()
  WHERE "id" = ($1->> 'id')::int
  RETURNING *;
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_invoice_line (json) RETURNS invoice_line AS $$
  UPDATE "invoice_line" SET 
    "quantity" = COALESCE(($1->> 'quantity')::posint, "quantity"), 
    "invoice_id" = COALESCE(($1->> 'invoice_id')::int, "invoice_id"), 
    "product_id" = COALESCE(($1->> 'product_id')::int, "product_id"), 
    "updated_at" = NOW()
  WHERE "id" = ($1->> 'id')::int
  RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
