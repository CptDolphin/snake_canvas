import { canvas, ctx, ROWS, COLUMNS, SCALE} from './env';

export let object = {
    x: 0,
    y: 0,
    vx: SCALE * 1,
    vy: SCALE * 0,
    parts: [[]],
    total: 0,
};

export function draw(snake) {
    ctx.fillStyle = "#FFFFFF"   
    for(const [x, y] of snake.parts){
        ctx.fillRect(x, y, SCALE, SCALE);
    }
    ctx.fillRect(snake.x, snake.y, SCALE, SCALE);
}

export function change_direction(snake, direction) {
    switch(direction) {
        case 'Up':
            console.log('')
            if(snake.vy !== SCALE*1){
                snake.vx = 0;
                snake.vy = -SCALE * 1
            }
            break;
        case 'Down':
            if(snake.vy !== -SCALE * 1){
                snake.vx = 0;
                snake.vy = SCALE * 1
            }
            break;
        case 'Left':
            if(snake.vx !== SCALE * 1){
                snake.vx = -SCALE * 1;
                snake.vy = 0
            }
            break;
        case 'Right':
            if(snake.vx !== -SCALE * 1){
                snake.vx = SCALE * 1;
                snake.vy = 0;
            }
            break;
    }
}

export function eat(snake, fruit){
    return snake.x === fruit.x && snake.y === fruit.y;
}

export function update(snake) {
    console.log('total is', snake.total);
    for(let i=0; i<snake.parts.length-1; i++){
        snake.parts[i] = snake.parts[i+1];
    }
    
    snake.parts[snake.total - 1] = [snake.x, snake.y]

    console.log('head is:', snake.x, snake.y);
    snake.x += snake.vx;
    snake.y += snake.vy;

    if (snake.x > canvas.width){
        snake.x = 0;
    }
    if (snake.x < 0){
        snake.x = canvas.width;
    }
    if (snake.y > canvas.height){
        snake.y = 0;
    }
    if (snake.y < 0){
        snake.y = canvas.height;
    }
}

export function eat_itself(snake){
    for(let part in snake.part){
        if(snake.x === part[0] && snake.y === part[1]){
            console.log('ate itself');
            return true;
        }
    }
    return false;
}

export function reset(snake){
    snake.x = 0;
    snake.y = 0;
    snake.vx = 0;
    snake.vy = SCALE * 1;
    parts = [[]];
    total = 0;
}
