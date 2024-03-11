visitor(**id**, email, password, name, adress, zip_code, city)
invoice(**id**, issued_at, paid_at, #visitor(id))
invoice_line(**id**, quantity, #invoice(id), #product(id))
product(**id**, label, price, taxes)