-- Verify DP-Back:invoice_details on pg

BEGIN;

SELECT * FROM "invoice_details" WHERE false;

ROLLBACK;
