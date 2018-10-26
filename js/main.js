let plotno = document.querySelector('#plotno');
const zdjecie = "./img/zdjecie.jpg";
let ctx = plotno.getContext('2d');
let btnRun = document.querySelector('#run');
let img = new Image();

img.src = zdjecie;

//Canvas
img.addEventListener('load', (e)=> {
    ctx.drawImage(img, 0, 0, plotno.width, plotno.height);
});

btnRun.addEventListener('click', (e)=>{
    let imageData = ctx.getImageData(0,0, plotno.width, plotno.height);
    console.log(imageData);
    for(let i=0; i<imageData.data.length; i+=4)
    {
        imageData.data[i] = Math.min(255, imageData.data[i] + 50);
        imageData.data[i] = Math.min(255, imageData.data[i+1] + 50);
        imageData.data[i] = Math.min(255, imageData.data[i+2] + 50);
    }
    ctx.putImageData(imageData, 0, 0);
});



