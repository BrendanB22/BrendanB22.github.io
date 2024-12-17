let canvas_element = document.getElementById("c");
let toolbox = canvas_element.getContext("2d");
let x = 0;
let y = 350;
let g = 1; 
let dy = 0; 
let dx = 5; 
let isLeft = false;
let isRight = false; 

let lava_x = 0;
let lava_y = 395;
let lava_w = 400;
let lava_h = 10; 

let LIMIT = 2
let POWER = -10
let jumpLimit = LIMIT
let jump_clock = 0
let COOLDOWN = 15;

let platform_x = 0; 
let platform_y = 380;
let platform_w = 50; 
let platform_h = 10;

let platform2_x = 370; 
let platform2_y = 380;
let platform2_w = 30; 

let platform3_x = 120; 
let platform3_y = 360; 
let platform3_w = 50; 

let platform4_x = 250; 
let platform4_y = 340; 
let platform4_w = 50; 

let platform5_x = 170; 
let platform5_y = 300; 
let platform5_w = 40; 

let platform6_x = 300;
let platform6_y = 270;
let platform6_w = 70;

let platform7_x = 50; 
let platform7_y = 260; 
let platform7_w = 30; 

let platform8_x = 370; 
let platform8_y = 210; 
let platform8_w = 30; 

let platform9_x = 0; 
let platform9_y = 220; 
let platform9_w = 30; 

let platform10_x = 200; 
let platform10_y = 160; 
let platform10_w = 50; 

let platform11_x = 100;
let platform11_y = 200; 
let platform11_w = 40; 

let platform12_x = 300;
let platform12_y = 50; 
let platform12_w = 100; 

let platform13_x = 0;
let platform13_y = 90; 
let platform13_w = 60; 

let platform14_x = 180;
let platform14_y = 80; 
let platform14_w = 30; 

let platform15_x = 80;
let platform15_y = 130; 
let platform15_w = 50; 

let platform16_x = 320;
let platform16_y = 140; 
let platform16_w = 40; 

let player = drawPlayer
let lava = drawLava
let exit = drawExit
let text = "GAME OVER"
let text1 = "YOU WIN"

document.body.addEventListener("keydown", onkeydown);
document.body.addEventListener("keyup", onkeyup);
let timer_id = setInterval(drawFrame, 20)

function onkeydown (e) {
    if (e.key === " ") {
        if (jumpLimit != 0 && jump_clock === 0){
            dy = POWER; 
            --jumpLimit; 
            ++jump_clock;
        }
    } else if (e.key === "ArrowRight") {
        isRight = true; 
    } else if (e.key === "ArrowLeft") {
        isLeft = true;
    }  else if (e.key === "p") {
        clearInterval(timer_id);
    } else if (e.key === "r") {
        timer_id = setInterval(drawFrame, 20);
    }
}

function onkeyup (e) {
    if (e.key === "ArrowRight") {
        isRight = false; 
    } else if (e.key === "ArrowLeft") {
        isLeft = false;
    }
}

function drawBackground () {
    toolbox.fillStyle = "#adedf0"; 
    toolbox.fillRect(0, 0, 400, 400);
}

function drawPlayer (x, y) {
    toolbox.fillStyle = "#f7e16f";
    toolbox.fillRect(x, y, 20, 20); 
}

function drawLava () {
    toolbox.fillStyle = "#FF2C2C";
    toolbox.fillRect(lava_x, lava_y, lava_w, lava_h);
}

function drawExit () {
    toolbox.fillStyle = "#000000";
    toolbox.fillRect(350, 20, 30, 40); 
    toolbox.fillStyle = "#898989";
    toolbox.fillRect(340, 20, 10, 40); 
    toolbox.fillRect(380, 20, 10, 40);
    toolbox.fillRect(350, 10, 30, 10);
}

function drawText () {
    toolbox.font = "50px Arial";
    toolbox.textBaseline = "middle";
    toolbox.textAlign = "center";
    toolbox.fillStyle = "#FF0000";
    let x = 200;
    let y = 200;
    toolbox.fillText(text, x, y);
}

function drawText1 () {
    toolbox.font = "50px Arial"
    toolbox.textBaseline = "middle";
    toolbox.textAlign = "center";
    toolbox.fillStyle = "#FF0000";
    let x = 200
    let y = 200
    toolbox.fillText(text1, x, y)
}

function drawPlatforms () {
    toolbox.fillStyle = "#a1e872"; 
    toolbox.fillRect(platform_x, platform_y, platform_w, platform_h); 
    toolbox.fillRect(platform2_x, platform2_y, platform2_w, platform_h);
    toolbox.fillRect(platform3_x, platform3_y, platform3_w, platform_h);
    toolbox.fillRect(platform4_x, platform4_y, platform4_w, platform_h);
    toolbox.fillRect(platform5_x, platform5_y, platform5_w, platform_h);
    toolbox.fillRect(platform6_x, platform6_y, platform6_w, platform_h);
    toolbox.fillRect(platform7_x, platform7_y, platform7_w, platform_h);
    toolbox.fillRect(platform8_x, platform8_y, platform8_w, platform_h);
    toolbox.fillRect(platform9_x, platform9_y, platform9_w, platform_h);
    toolbox.fillRect(platform10_x, platform10_y, platform10_w, platform_h);
    toolbox.fillRect(platform11_x, platform11_y, platform11_w, platform_h);
    toolbox.fillRect(platform12_x, platform12_y, platform12_w, platform_h);
    toolbox.fillRect(platform13_x, platform13_y, platform13_w, platform_h);
    toolbox.fillRect(platform14_x, platform14_y, platform14_w, platform_h);
    toolbox.fillRect(platform15_x, platform15_y, platform15_w, platform_h);
    toolbox.fillRect(platform16_x, platform16_y, platform16_w, platform_h);
}

 function updatePlayerPosition () {
    dy += g; 
    y += dy; 
    if (y - dy + 20 <= platform_y && y + 20 >= platform_y && 
        x + 20 >= platform_x && x <= platform_x + platform_w
    ) {
        y = platform_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT;
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform2_y && y + 20 >= platform2_y && 
        x + 20 >= platform2_x && x <= platform2_x + platform2_w
    ) { 
         y = platform2_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform3_y && y + 20 >= platform3_y && 
        x + 20 >= platform3_x && x <= platform3_x + platform3_w
    ) { 
         y = platform3_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform4_y && y + 20 >= platform4_y && 
        x + 20 >= platform4_x && x <= platform4_x + platform4_w
    ) { 
         y = platform4_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0;
    } else if (y - dy + 20 <= platform5_y && y + 20 >= platform5_y && 
        x + 20 >= platform5_x && x <= platform5_x + platform5_w
    ) {
         y = platform5_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform6_y && y + 20 >= platform6_y && 
        x + 20 >= platform6_x && x <= platform6_x + platform6_w
    ) { 
         y = platform6_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform7_y && y + 20 >= platform7_y && 
        x + 20 >= platform7_x && x <= platform7_x + platform7_w
    ) { 
         y = platform7_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform8_y && y + 20 >= platform8_y && 
        x + 20 >= platform8_x && x <= platform8_x + platform8_w
    ) { 
         y = platform8_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform9_y && y + 20 >= platform9_y && 
        x + 20 >= platform9_x && x <= platform9_x + platform9_w
    ) { 
         y = platform9_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform10_y && y + 20 >= platform10_y && 
        x + 20 >= platform10_x && x <= platform10_x + platform10_w
    ) { 
         y = platform10_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform11_y && y + 20 >= platform11_y && 
        x + 20 >= platform11_x && x <= platform11_x + platform11_w
    ) { 
         y = platform11_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform12_y && y + 20 >= platform12_y && 
        x + 20 >= platform12_x && x <= platform12_x + platform12_w
    ) { 
         y = platform12_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform13_y && y + 20 >= platform13_y && 
        x + 20 >= platform13_x && x <= platform13_x + platform13_w
    ) { 
         y = platform13_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform14_y && y + 20 >= platform14_y && 
        x + 20 >= platform14_x && x <= platform14_x + platform14_w
    ) { 
         y = platform14_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform15_y && y + 20 >= platform15_y && 
        x + 20 >= platform15_x && x <= platform15_x + platform15_w
    ) { 
         y = platform15_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } else if (y - dy + 20 <= platform16_y && y + 20 >= platform16_y && 
        x + 20 >= platform16_x && x <= platform16_x + platform16_w
    ) { 
         y = platform16_y - 20; 
        dy = 0; 
        jumpLimit = LIMIT; 
        jump_clock = 0; 
    } 

    if (y > 380) {
        y = 380;
        dy = 0; 
        jumpLimit = LIMIT;
        jump_clock = 0; 
    } 
    if (isRight) {
        x += dx;
    } else if (isLeft) {
        x -= dx;
    }
    if (x <= -20) {
        x = 400;
        y = 370; 
    } else if (x >= 420) {
        x = -20; 
        y = 370; 
    } 

}

function drawFrame () {
    updatePlayerPosition();
        if (jump_clock > 0) {
            if (jump_clock === COOLDOWN) {
                jump_clock = 0; 
            } else {
                ++jump_clock; 
            }
        }

    drawBackground();
    drawLava(); 
    drawExit();
    drawPlatforms(); 
    drawPlayer(x, y);
    if (y + 20 > lava_y) {
        drawText ();
        clearInterval(timer_id);
    }
    if (y + 20 < 30) {
        drawText1 ();
        clearInterval(timer_id);
    }
    }