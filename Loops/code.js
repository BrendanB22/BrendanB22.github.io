let canvas_element = document.getElementById("c");
let painter = canvas_element.getContext('2d');

let canvas_element2 = document.getElementById("c2");
let painter2 = canvas_element2.getContext('2d');

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);
painter.fillStyle = "#FF0000";

painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400);
painter2.fillStyle = "#FF0000";

let w = 20, h = 20, gap = 10;
for (let r = 0; r < 13; ++r) {
    for (let c = r; c < 13; ++c) {
        let x = gap + r * (w + gap);
        let y = gap + c * (h + gap);
        painter.fillRect(x, y, w, h)
    }
}

let i = 0
while (i < 13) {
    let c = i;
    while (c < 13) {
        let x = gap + c * (w + gap);
        let y = gap + i * (h + gap);
        painter2.fillRect(x, y, w, h)
        ++c
    }
    ++i
}


