-- Deploy DP-Back:invoice_details to pg

BEGIN;

CREATE VIEW "invoice_details" AS
  SELECT 
    "visitor"."name",
    "visitor"."city",
    "invoice"."id" AS "invoice_ref",
    "invoice"."issued_at",
    "invoice"."paid_at",
    "invoice_line"."quantity",
    "product"."label",
    "product"."price",
    "product"."taxes",
    "product"."price" * (1+"product"."taxes") * "invoice_line"."quantity" AS "total_line"
  FROM "visitor"
    JOIN "invoice"
      ON "invoice"."visitor_id" = "visitor"."id"
    JOIN "invoice_line"
      ON "invoice_line"."invoice_id" = "invoice"."id"
    JOIN "product"
    ON "product"."id" = "invoice_line"."product_id";

COMMIT;
