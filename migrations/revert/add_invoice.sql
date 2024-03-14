-- Revert DP-Back:add_invoice from pg

BEGIN;

DROP FUNCTION "add_lines"(int, json[]), "add_invoice"(json);

COMMIT;
