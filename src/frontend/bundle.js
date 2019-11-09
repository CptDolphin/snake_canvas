(function () {
    'use strict';

    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const SCALE = 20;
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

    // function Fruit() {
    //     this.x;
    //     this.y;

    //     this.pickLocation = function(){
    //         this.x = (Math.floor(Math.random() * rows -1) +1) * scale
    //         this.y = (Math.floor(Math.random() * columns -1) +1) * scale
    //     }

    //     this.draw = function() {
    //         ctx.fillStyle = "#1c5826";
    //         ctx.fillRect(this.x, this.y, scale, scale);
    //     }
    // }

    let object$1 = {
        x: 0,
        y: 0,
        vx: SCALE * 1,
        vy: SCALE * 0,
        parts: [[]],
        total: 0,
    };

    function draw$1(snake) {
        ctx.fillStyle = "#FFFFFF";   
        for(const [x, y] of snake.parts){
            ctx.fillRect(x, y, SCALE, SCALE);
        }
        ctx.fillRect(snake.x, snake.y, SCALE, SCALE);
    }

    function change_direction(snake, direction) {
        switch(direction) {
            case 'Up':
                console.log('');
                if(snake.vy !== SCALE*1){
                    snake.vx = 0;
                    snake.vy = -SCALE * 1;
                }
                break;
            case 'Down':
                if(snake.vy !== -SCALE * 1){
                    snake.vx = 0;
                    snake.vy = SCALE * 1;
                }
                break;
            case 'Left':
                if(snake.vx !== SCALE * 1){
                    snake.vx = -SCALE * 1;
                    snake.vy = 0;
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

    function eat(snake, fruit){
        return snake.x === fruit.x && snake.y === fruit.y;
    }

    function update(snake) {
        console.log('total is', snake.total);
        for(let i=0; i<snake.parts.length-1; i++){
            snake.parts[i] = snake.parts[i+1];
        }
        
        snake.parts[snake.total - 1] = [snake.x, snake.y];

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

    function eat_itself(snake){
        for(let part in snake.part){
            if(snake.x === part[0] && snake.y === part[1]){
                console.log('ate itself');
                return true;
            }
        }
        return false;
    }

    function reset(snake){
        snake.x = 0;
        snake.y = 0;
        snake.vx = 0;
        snake.vy = SCALE * 1;
        parts = [[]];
        total = 0;
    }

    (function setup() {
        location_pick_random(object);

        console.log(object);

        window.setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            update(object$1);
            draw(object);
            draw$1(object$1);

            if(eat(object$1, object)){
                location_pick_random(object);
                object$1.total++;
                console.log('snake object total', object$1.total);
            }

            if(eat_itself(object$1)){
                console.log('is eating itself');
                reset();
            }
        }, 250);
    }());

    window.addEventListener('keydown', ((evt) => {
        const direction = evt.key.replace('Arrow', '');
        change_direction(object$1, direction);
    }));

}());
//# sourceMappingURL=bundle.js.map
