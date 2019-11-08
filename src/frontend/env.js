export const canvas = document.querySelector('.canvas');
export const ctx = canvas.getContext('2d');
export const SCALE = 10;
export const ROWS = canvas.height / SCALE;
export const COLUMNS = canvas.width / SCALE;
export let snake = undefined;
export let snake_parts = [];
