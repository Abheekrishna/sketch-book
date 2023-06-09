const btn = document.getElementById('btn');
const drawBtn = document.getElementById('draw');
const canvasDiv = document.getElementById('canvas');
const rainbowBtn = document.getElementById('rainbow');
const colorWheel = document.getElementById('colorWheel');
const eraserBtn = document.getElementById('eraser');


function rainbow () {
    const rgb = [];
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    rgb.push(r);
    rgb.push(g);
    rgb.push(b);
    const rainbowColor = rgb.join(' ');
    return rainbowColor;
}

drawBtn.addEventListener('click', () =>{
    const canvasSize = prompt('Enter a size for your canvas.');
    canvasDiv.style.display = 'grid';
    canvasDiv.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
    canvasDiv.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;
for (i = 0; i < canvasSize; i++) {
    for (j = 0; j < canvasSize; j++) {
        const div = document.createElement('div');
        div.addEventListener('mousemove', () => {
            div.style.backgroundColor = `${colorWheel.value}`;
        })

        rainbowBtn.addEventListener('click', () => {
            div.addEventListener('mousemove', () => {
                div.style.backgroundColor = `rgb(${rainbow()})`
            })
        })

        //Clear
        btn.addEventListener('click', () => {
            div.style.backgroundColor = 'transparent';
        })

        eraserBtn.addEventListener('click', () => {
            div.addEventListener('click', () => {
                div.style.backgroundColor = '#ffffff';
            })
        })
        div.classList.add('div')

        canvasDiv.appendChild(div);
    }
}
})


