-- Revert DP-Back:init from pg

BEGIN;

DROP TABLE "visitor", "product", "invoice", "invoice_line";

DROP DOMAIN "posint", "posreal";

COMMIT;
