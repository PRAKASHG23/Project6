function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color ='#';
    for( let i= 0; i < 6 ;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
const container = document.getElementById('boxContainer');
for(let i =0 ; i<5; i++){
    const box = document.createElement('div');
    box.className ='box';
    box.style.backgroundColor = getRandomColor();
    container.appendChild(box);
}