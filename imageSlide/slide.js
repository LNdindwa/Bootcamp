
let show_images = document.querySelector(".show_images");
let foward = document.querySelector(".foward");
let prev = document.querySelector(".prev");


let imgs = ["images1.png","images2.png","images3.png"]

let index = 0;

function next(){
show_images.src = imgs[index]
    // let show = imgs[index];
    // console.log(show);
    index++;
    if(index >= imgs.length){
        index=0;
    }

}

function back(){
    // let show = image[i]
// index = index-1;
show_images.src = imgs[index]
index--

if(index < 0){
    index = imgs.length-1;
}

}

