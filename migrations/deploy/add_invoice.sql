-- Deploy DP-Back:add_invoice to pg

BEGIN;

CREATE FUNCTION "add_lines"(int, json[]) RETURNS invoice_details AS $$
	SELECT "insert_invoice_line"(
		json_build_object(
			'invoice_id', $1,
			'product_id', ("product"->>'id')::int,
			'quantity', ("product"->>'quantity')::int
		)
	)
  FROM UNNEST($2) AS products(product);
	SELECT * FROM invoice_details WHERE invoice_ref=$1;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION "add_invoice"(json) RETURNS invoice_details AS $$
	SELECT "add_lines"(
    (SELECT "id" FROM "insert_invoice"($1)), 
    (
      SELECT * FROM "json_to_record"($1)
      AS "x"("products" json[])
    )
  );
$$ LANGUAGE SQL STRICT;

COMMIT;
