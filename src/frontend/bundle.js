(function () {
    'use strict';

    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const SCALE = 10;
    const ROWS = canvas.height / SCALE;
    const COLUMNS = canvas.width / SCALE;

    let object = {
        x: 0,
        y: 0,
    };

    function draw(fruit) {
        ctx.fillStyle = "#1c5826";
        ctx.fillRect(fruit.x, fruit.y, SCALE, SCALE);
    }

    function location_pick_random(fruit) {
        fruit.x = (Math.floor(Math.random() * ROWS -1) +1) * SCALE;
        fruit.y = (Math.floor(Math.random() * COLUMNS -1) +1) * SCALE;
    }

    let object$1 = {
        vx: SCALE * 1,
        vy: SCALE * 0,
        parts: [[0, 0]],
        total: 0,
    };

    function draw$1(snake) {
         ctx.fillStyle = "#FFFFFF";
        for(const [x, y] of snake.parts){
            ctx.fillRect(x, y, SCALE, SCALE);
        }
    }

    function change_direction(snake, direction) {
        switch(direction) {
            case 'Up':
                snake.vx = 0;
                snake.vy = -SCALE * 1;
                break;
            case 'Down':
                snake.vx = 0;
                snake.vy = SCALE * 1;
                break;
            case 'Left':
                snake.vx = -SCALE * 1;
                snake.vy = 0;
                break;
            case 'Right':
                snake.vx = SCALE * 1;
                snake.vy = 0;
                break;
        }
    }

    function update(snake) {
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

    (function setup() {
        location_pick_random(object);

        window.setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            update(object$1);
            draw(object);
            draw$1(object$1);
        }, 250);
    }());

    window.addEventListener('keydown', ((evt) => {
        const direction = evt.key.replace('Arrow', '');
        change_direction(object$1, direction);
    }));

}());
//# sourceMappingURL=bundle.js.map
