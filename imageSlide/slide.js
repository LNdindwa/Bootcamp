
let slideshow = document.querySelector(".slideshow");
let Foward = document.querySelector(".Foward");
let Previous  = document.querySelector(".Previous");

let images;

if(localStorage.getItem("images")){
   images = JSON.parse(localStorage.getItem("images"));

}else{
    images = ["images1.png","images2.png","images3.png"];

    
}
// document.getElementById("slideshow")
// sessionStorage.setItem("slideshow",JSON.stringify(images))

let index = 0;



// function add(){

//     let img = document.getElementById("img").value;
//     images.push(img)
//     // document.getElementById("img").value = '';
    
//     sessionStorage.setItem("slideshow",JSON.stringify(images));
// }
// // images.src = images[index]

function next(){
    slideshow.src = images[index]

    // let show = imgs[index];
    // console.log(show);
    index++;
    if(index >= images.length){
        index=0;
    }
    // images.src = images[index]
}

function back(){
    slideshow.src = images[index]
    // let show = image[i]
// index = index-1;
index --;
if(index < 0){
    index = images.length-1;
    index=0;
}

}



// let img = document.getElementById("image")
//let img = document.getElementById("image").value
// let current = 0;

    // let m = sessionStorage.getItem(JSON.parse("images"));



// if(sessionStorage.getItem("images")){
// images = JSON.parse(sessionStorage.getItem("images"));    
// }else{
//     images = ["images1.png","images2.png","images3.png"]
// }

// let pictures = ["images1.png","images2.png","images3.png"]

// localStorage.setItem("images",JSON.stringify(pictures));
// //localStorage.getItem(pictures)



function add(){

    let imgs = document.getElementById("imgs").value;
    images.push(imgs);
    // document.getElementById("img").value = '';
    
    localStorage.setItem("images",JSON.stringify(images));

    if(image =="" || image == null){
        return "put something"

    }else if(image){
        return "this image already exists"
    }


}


function removeImage(){
    images.splice(i,1);
    localStorage.setItem("images",JSON.stringify(images))
    window.location.reload()
}