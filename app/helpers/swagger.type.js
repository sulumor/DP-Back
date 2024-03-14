// Visitor Type

/**
 * @typedef { object } Visitor
 * @property { number } id
 * @property { string } email
 * @property { string } password
 * @property { string } name
 * @property { string } address
 * @property { string } zip_code
 * @property { string } city
 * @property { string } created_at
 * @property { string | null } updated_at
 */

/**
 * @typedef { object } VisitorCreate
 * @property { string } email.required - Email
 * @property { string } password.required - Mot de passe
 * @property { string } name.required - Nom
 * @property { string } address.required - Adresse
 * @property { string } zip_code.required - Code Postale
 * @property { string } city.required - Ville
 */

/**
 * @typedef { object } VisitorUpdate
 * @property { string } email - Email
 * @property { string } password - Mot de passe
 * @property { string } name - Nom
 * @property { string } address - Adresse
 * @property { string } zip_code - Code Postale
 * @property { string } city - Ville
 */

// Product Type

/**
 * @typedef { object } Product
 * @property { number } id
 * @property { string } label
 * @property { number } price
 * @property { number } taxes
 * @property { string } created_at
 * @property { string | null } updated_at
 */

/**
 * @typedef { object } ProductCreate
 * @property { string } label.required - Label
 * @property { number } price.required - Prix
 * @property { number } taxes.required - Taux TVA
 */

/**
 * @typedef { object } ProductUpdate
 * @property { string } label - Label
 * @property { number } price - Prix
 * @property { number } taxes - Taux TVA
 */

// Invoice Type

/**
 * @typedef { object } Invoice
 * @property { number } id
 * @property { string } issued_at
 * @property { string } paid_at
 * @property { number } visitor_id
 * @property { string } created_at
 * @property { string | null } updated_at
 */

/**
 * @typedef { object } InvoiceCreate
 * @property { string } issued_at.required - Création de la facture
 * @property { string } paid_at.required - Paiement de la fature
 * @property { number } visitor_id.required - Id du visiteur
 */

/**
 * @typedef { object } InvoiceUpdate
 * @property { string } issued_at - Création de la facture
 * @property { string } paid_at - Paiement de la fature
 * @property { number } visitor_id - Id du visiteur
 */

// InvoiceLine Type

/**
 * @typedef { object } InvoiceLine
 * @property { number } id
 * @property { number } quantity
 * @property { number } invoice_id
 * @property { number } product_id
 * @property { string } created_at
 * @property { string | null } updated_at
 */

/**
 * @typedef { object } InvoiceLineCreate
 * @property { number } quantity.required - Quantité de produit
 * @property { number } invoice_id.required - Id de la facture
 * @property { number } product_id.required - Id du produit
 */

/**
 * @typedef { object } InvoiceLineUpdate
 * @property { number } quantity - Quantité de produit
 * @property { number } invoice_id - Id de la facture
 * @property { number } product_id - Id du produit
 */

// Tokens

/**
 * @typedef { object } Tokens
 * @property { string } accessToken - Token d'accès à l'Api
 * @property { string } refreshToken - Token pour refaire un access token
 */

/**
 * @typedef { object } Message
 * @property { string } message - Messsage
 */
