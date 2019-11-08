import { ctx, SCALE, ROWS, COLUMNS } from './env';

export let object = {
    x: 0,
    y: 0,
};

export function set(fruit, x, y) {
    fruit.x = x;
    fruit.y = y;
}

export function draw(fruit) {
    ctx.fillStyle = "#1c5826";
    ctx.fillRect(fruit.x, fruit.y, SCALE, SCALE);
}

export function location_pick_random(fruit) {
    fruit.x = (Math.floor(Math.random() * ROWS -1) +1) * SCALE;
    fruit.y = (Math.floor(Math.random() * COLUMNS -1) +1) * SCALE;
}
