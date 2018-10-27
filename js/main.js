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

function brightnessChange(val){
    document.getElementById('brightnessStatus').innerHTML=Math.round(val/2*100)+" %";
    document.getElementById("brightness").style.filter="brightness("+val+")";
}

function contrastChange(val){
    document.getElementById('contrastStatus').innerHTML=Math.round(val/3*100)+" %";
    document.getElementById("contrast").style.filter="contrast("+val+")";
}

function saturationChange(val){
    document.getElementById('saturationStatus').innerHTML=Math.round(val*10)+" %";
    document.getElementById("saturation").style.filter="saturate("+val+")";
}

function blurChange(val){
    document.getElementById('blurStatus').innerHTML=Math.round(val*10)+" %";
    document.getElementById("plotno").style.filter="blur("+val+"px)";
}


