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
        imageData.data[i] = Math.min(255, imageData.data[i] + 20);
        imageData.data[i] = Math.min(255, imageData.data[i+1] + 20);
        imageData.data[i] = Math.min(255, imageData.data[i+2] + 20);
    }
    ctx.putImageData(imageData, 0, 0);
});

function sliderChange(val){
    document.getElementById('sliderStatus').innerHTML=val;
    document.getElementById("plotno").style.filter="brightness("+val+")";
}

