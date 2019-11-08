import * as fruit from './fruit';
import * as snake from './snake';
import { canvas, ctx, SCALE, ROWS, COLUMNS } from './env';

(function setup() {
    fruit.location_pick_random(fruit.object);

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update(snake.object);
        fruit.draw(fruit.object);
        snake.draw(snake.object);
    }, 250);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.change_direction(snake.object, direction);
}))
