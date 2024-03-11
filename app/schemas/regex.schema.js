export const frAlphaNum = /^[a-zA-ZÀ-ÿ0-9-]+$/;

export const zipCodeRegex = /^0[1-9]\d{3}$ | ^[1-8]\d{4}$ | ^9[0-59]\d{3}$ | ^97[1-8]\d{2}$ | ^98[046-9]\d{2}$ | ^00000$/;

export const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
