const btn = document.getElementById('btn');
const canvasDiv = document.getElementById('canvas');


canvasDiv.style.display = 'grid';
canvasDiv.style.gridTemplateColumns = 'repeat(30, 1fr)';
canvasDiv.style.gridTemplateRows = 'repeat(30, 1fr)';
canvasDiv.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';

for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
        const div = document.createElement('div');
        div.classList.add('grid-cell');
        div.addEventListener('mousemove', () => {
            div.classList.add('grid-active')
        })
        btn.addEventListener('click', () => {
            div.style.backgroundColor = '#ffffff'
        })
        canvasDiv.appendChild(div);
    }
}