function changeColor(){
    document.body.style.backgroundColor = 
    `rgb(` + Math.round(Math.random() * 255) +
    ','+ Math.round(Math.random() * 255) +
    ','+ Math.round(Math.random() * 255) + `)`;
    let outColor = document.getElementById('color');
    outColor.innerHTML = document.body.style.backgroundColor;

    // document.body.style.backgroundColor = 
    // `rgba(` + Math.round(Math.random() * 255) +
    // ','+ Math.round(Math.random() * 255) +
    // ','+ Math.round(Math.random() * 255) + 
    // ','+Math.round(Math.random() * 1 / 1)+
    // `)`;
console.log(document.body.style.backgroundColor);
console.log("CHECK THE SCRIPT FOR A PART THAT ALLOWS YOU TO USE Rgba Colors for its Definitions")
}
// use this to change the background every 1 second or increaase the value 
//in terms of seconds and also hmm,
// setInterval(changeColor, 1000);
function copyColor(){
    let copyText = document.body.style.backgroundColor;
    copyText.select();
    document.execCommand("copy");
    document.getElementById('color').innerHTML += "Copied the Color: " + copyText;
}
