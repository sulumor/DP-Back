-- Verify DP-Back:init on pg

BEGIN;

SELECT * FROM "visitor" WHERE false;
SELECT * FROM "product" WHERE false;
SELECT * FROM "invoice" WHERE false;
SELECT * FROM "invoice_line" WHERE false;

ROLLBACK;
