const btn = document.getElementById('btn');
const drawBtn = document.getElementById('draw');
const canvasDiv = document.getElementById('canvas');
const rainbowBtn = document.getElementById('rainbow');


canvasDiv.style.display = 'grid';
canvasDiv.style.gridTemplateColumns = 'repeat(30, 1fr)';
canvasDiv.style.gridTemplateRows = 'repeat(30, 1fr)';
canvasDiv.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';


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
for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
        const div = document.createElement('div');
        div.addEventListener('mousemove', () => {
            div.style.backgroundColor = 'rgb(57, 57, 57)';
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
        canvasDiv.appendChild(div);
    }
}
})

