import { canvas, ctx, ROWS, COLUMNS, SCALE} from './env';

export let object = {
    vx: SCALE * 1,
    vy: SCALE * 0,
    parts: [[0, 0]],
    total: 0,
};


export function set_velocity(snake, vx, vy, parts) {
    snake.vx = SCALE * 1;
    snake.vy = SCALE * 0;
}

export function extend(snake, part){
    snake.update();
    snake.parts.push(part);
}

export function draw(snake) {
     ctx.fillStyle = "#FFFFFF"
    for(const [x, y] of snake.parts){
        ctx.fillRect(x, y, SCALE, SCALE);
    }
}

export function change_direction(snake, direction) {
    switch(direction) {
        case 'Up':
            snake.vx = 0;
            snake.vy = -SCALE * 1
            break;
        case 'Down':
            snake.vx = 0;
            snake.vy = SCALE * 1
            break;
        case 'Left':
            snake.vx = -SCALE * 1;
            snake.vy = 0
            break;
        case 'Right':
            snake.vx = SCALE * 1;
            snake.vy = 0;
            break;
    }
}

export function eat(snake, fruit){
    console.log('fruit is:',fruit);
    const head = snake.parts[0];
    return head[0] === fruit.x && head[1] === fruit.y;
}

export function update(snake) {
    const head = snake.parts[0];
    head[0] += snake.vx;
    head[1] += snake.vy;
    if (head[0] > canvas.width){
        head[0] = 0;
    }
    if (head[0] < 0){
        head[0] = canvas.width;
    }
    if (head[1] > canvas.height){
        head[1] = 0;
    }
    if (head[1] < 0){
        head[1] = canvas.height;
    }

}
