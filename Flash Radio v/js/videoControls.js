const volume=document.getElementById("videoFm");
volume.volume=0.5;


function SetVolume(val){
    let reproductor=document.getElementById("videoFm")
    reproductor.volume=val/100;
    console.log(volume.volume);
}

const sliderEl=document.querySelector("#volumeControl")
const sliderValue=document.querySelector(".valorVolumen")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value; 
    sliderValue.textContent = tempSliderValue;//Valor del audio
    const progress = (tempSliderValue / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, #fbb811 ${progress}%, #8d3052 ${progress}%)`;
})


