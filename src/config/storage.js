export const add = (key, value) => localStorage.setItem(key, value);

export const get = (key) => JSON.parse(localStorage.getItem(key));